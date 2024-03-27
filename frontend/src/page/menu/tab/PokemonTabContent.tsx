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
  console.info('PokemonTabContent - render all');

  // Query
  const {
    data: getPokemonData,
    isLoading: getPokemonIsLoading,
  } = useGetPokemonQuery();
  // Mutation
  const [postPokemonData, { isLoading: postPokemonDataIsLoading }] = usePostPokemonMutation();
  const pokemons = getPokemonData ?? [];
  const isLoading = getPokemonIsLoading || postPokemonDataIsLoading;

  const editedPokemonsMap = useRef<Record<number, IPokemon>>({});
  const resetMap = useRef<Record<number, { reset:() => void }>>({});

  const [hasEditedPokemons, setHasEditedPokemons] = useState(false);

  useEffect(() => {
    setHasEditedPokemons(false);
  }, [pokemons]);

  const editPokemonName = (id: number, name: string) => {
    editedPokemonsMap.current[id] = {
      id,
      name,
    };
    setHasEditedPokemons(true);
  };

  const handleSubmit = () => {
    const updatedPokemonData: IPokemon[] = pokemons.map((pokemon) => editedPokemonsMap.current[pokemon.id] ?? pokemon);
    postPokemonData({ body: updatedPokemonData });
  };

  const handleReset = () => {
    Object.values(editedPokemonsMap.current)
      .forEach(({ id }) => resetMap.current[id].reset());
    editedPokemonsMap.current = {};
    setHasEditedPokemons(false);
  };

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
