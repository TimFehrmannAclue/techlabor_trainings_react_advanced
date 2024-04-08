import React, {
  ReactElement, useEffect, useMemo, useRef, useState,
} from 'react';
import {
  Box, Button, List, ListItem, Stack, styled,
} from '@mui/material';

import { IPokemon, useGetPokemonQuery, usePostPokemonMutation } from '../../../state/api/backend/raw/rawApi';
import EditableTextField from '../EditableTextField';
import ResponsiveLoadingBackdrop from '../../../component/backdrop/ResponsiveLoadingBackdrop';

const StyledStack = styled(Stack)(() => ({
  position: 'relative',
  width: 'auto',
  alignSelf: 'center',
  gap: 2,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  overflowY: 'auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: 'inset 0px 3px 3px -2px rgba(0,0,0,0.2), inset 0px 3px 4px 0px rgba(0,0,0,0.14), inset 0px 1px 8px 0px rgba(0,0,0,0.12)',
  height: 600,
  width: 300,
  paddingTop: theme.spacing(2),
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(2),
}));

export default function PokemonTabContent(): ReactElement {
  // Query
  const {
    data: getPokemonData,
    isLoading: getPokemonIsLoading,
  } = useGetPokemonQuery();

  // Mutation
  const [postPokemonData, { isLoading: postPokemonDataIsLoading }] = usePostPokemonMutation();
  const pokemons = getPokemonData ?? [];

  // Display loading when waiting for backend request
  const isLoading = getPokemonIsLoading || postPokemonDataIsLoading;

  // useRef is like useState but does not trigger a rerender
  // Re-rendering on every change would be very costly due to all those pokemon
  // This is possible due to every TextField handling its own state.
  const editedPokemonsMap = useRef<Record<number, IPokemon>>({});
  // There is no way to reset the TextFields with re-rendering due to useMemo caching
  // so all TextFields pass back a function reference to a reset the internal state of the TextField
  const resetMap = useRef<Record<number, { reset:() => void }>>({});

  // We want to rerender once the first change occurred to f.e. enable buttons submit, reset
  const [hasEditedPokemons, setHasEditedPokemons] = useState(false);

  // Reset hasEdited when new pokemons were fetched
  useEffect(() => {
    setHasEditedPokemons(false);
  }, [pokemons]);

  const editPokemonName = (id: number, name: string) => {
    editedPokemonsMap.current[id] = { id, name };
    setHasEditedPokemons(true);
  };

  const handleSubmit = () => {
    // Submitting all pokemon. Use changed pokemon in favor of unchanged.
    const updatedPokemonData: IPokemon[] = pokemons.map((pokemon) => editedPokemonsMap.current[pokemon.id] ?? pokemon);
    postPokemonData({ body: updatedPokemonData });
  };

  const handleReset = () => {
    // Reset the internal state of every TextField
    Object.values(editedPokemonsMap.current)
      .forEach(({ id }) => resetMap.current[id].reset());
    editedPokemonsMap.current = {};
    setHasEditedPokemons(false);
  };

  // UseMemo allows for caching based on dependencies like f.e. pokemon
  const cachedPokemonItems = useMemo(
    () => {
      console.info('PokemonTabContent - render useMemo - pokemonCount: ', pokemons.length);
      return pokemons.map((pokemon) => (
        <ListItem id="PokemonListItem" key={pokemon.id}>
          <EditableTextField
            defaultValue={editedPokemonsMap.current[pokemon.id]?.name || pokemon.name}
            onChange={(value) => editPokemonName(pokemon.id, value)}
            ref={(el: { reset: () => void }) => {
              resetMap.current[pokemon.id] = el;
            }}
          />
        </ListItem>
      ));
    },
    [pokemons],
  );

  return (
    <StyledStack id="PokemonTabContent">
      {isLoading ? <ResponsiveLoadingBackdrop /> : null}
      <StyledBox id="PokemonListBox">
        <List id="PokemonList" dense>
          {cachedPokemonItems}
        </List>
      </StyledBox>

      <ButtonBox id="ButtonsBox">
        <Button
          variant="contained"
          onClick={handleReset}
          disabled={!hasEditedPokemons}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!hasEditedPokemons}
        >
          Submit
        </Button>
      </ButtonBox>
    </StyledStack>
  );
}
