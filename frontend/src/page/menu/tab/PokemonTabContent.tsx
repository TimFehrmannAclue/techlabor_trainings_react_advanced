import React, {
  ReactElement, useEffect, useMemo, useRef, useState,
} from 'react';
import {
  Box, Button, List, ListItem, Stack, styled,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import {
  IPokemon, useGetPokemonQuery, usePostPokemonMutation,
} from '../../../state/api/pokemon/pokemonApi';
import EditableTextField from '../EditableTextField';
import ResponsiveLoadingBackdrop from '../../../component/backdrop/ResponsiveLoadingBackdrop';
import enhancedPokemonApi from '../../../state/api/pokemon/enhancedPokemonApi';
import { POKEMON_ARTWORK_BY_ID_URL } from '../../../config/config';

const StyledStack = styled(Stack)(() => ({
  position: 'relative',
  display: 'flex',
  height: '100%',
  overflow: 'auto',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
  width: 'inherit',
  maxWidth: 'inherit',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  overflowY: 'auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: 'inset 0px 3px 3px -2px rgba(0,0,0,0.2), inset 0px 3px 4px 0px rgba(0,0,0,0.14), inset 0px 1px 8px 0px rgba(0,0,0,0.12)',
  maxHeight: 'inherit',
  width: 'inherit',
  maxWidth: 'inherit',
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: 'inherit',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(2),
}));

export default function PokemonTabContent(): ReactElement {
  const dispatch = useDispatch();
  const [selectedPokemonId, setSelectedPokemonId] = useState<number>(1);

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

  // ToDo 3.2.1 use useRef to store edited pokemons in a editedPokemonsMap
  // useRef is like useState but does not trigger a rerender
  // Re-rendering on every change would be very costly due to all those pokemon
  // This is possible due to every TextField handling its own state.
  const editedPokemonsMap = useRef<Record<number, IPokemon>>({});

  // ToDo 3.3.1 use useState to enable/disable the reset & submit button
  // We want to rerender once the first change occurred to f.e. enable buttons submit, reset
  const [hasEditedPokemons, setHasEditedPokemons] = useState(false);

  // ToDo 3.4.1 use useRef to store reset Callbacks from child components in a resetMap
  // There is no way to reset the TextFields with re-rendering due to useMemo caching
  // so all TextFields pass back a function reference to a reset the internal state of the TextField
  const resetMap = useRef<Record<number, () => void>>({});

  // Reset hasEdited when new pokemon were fetched
  useEffect(() => {
    setHasEditedPokemons(false);
    return () => {
      // Clear Cache on Logout as this might lead to confusing behaviour during training otherwise
      if (pokemons && pokemons.length > 0) {
        dispatch(enhancedPokemonApi.util.invalidateTags(['Pokemon']));
      }
    };
  }, [pokemons]);

  const handleSelectedPokemonId = (id: number) => {
    setSelectedPokemonId(id);
  }

  const handleUpdatePokemon = (pokemon: IPokemon) => {
    // ToDo 3.2.2 update the pokemon in the editedPokemonsMap
    editedPokemonsMap.current[pokemon.id] = pokemon;
    // ToDo 3.3.2 update the state that tracks whether pokemons have been edited
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
      .forEach(({ id }) => resetMap.current[id]());
    editedPokemonsMap.current = {};
    setHasEditedPokemons(false);
  };

  // ToDo 3.1 use useMemo to cache the pokemonItems
  // UseMemo allows for caching based on dependencies like f.e. pokemon
  const cachedPokemonItems = useMemo(
    () => {
      console.info('PokemonTabContent - render useMemo - pokemonCount: ', pokemons.length);
      // ToDo 3.4.2 Pass a callback function to EditableTextField
      //            - when triggered it returns a reference to a reset function
      //            - assign the the reset function to the resetMap
      return pokemons.map((pokemon) => (
        <ListItem id="PokemonListItem" key={pokemon.id}>
          <EditableTextField
            defaultValue={editedPokemonsMap.current[pokemon.id]?.name || pokemon.name}
            onChange={(name) => handleUpdatePokemon({ id: pokemon.id, name })}
            onSelect={() => handleSelectedPokemonId(pokemon.id)}
            registerReset={(reset) => {
              resetMap.current[pokemon.id] = reset;
            }}
          />
        </ListItem>
      ));
    },
    [pokemons],
  );

  return (
    <StyledStack id="PokemonTabContent">
      <img style={{ width: 200, height: 200 }} src={`${POKEMON_ARTWORK_BY_ID_URL}${selectedPokemonId}.png`} alt="PokemonArtwork" />
      <StyledBox id="PokemonListBox">
        {isLoading ? <ResponsiveLoadingBackdrop /> : null}
        <List id="PokemonList" dense sx={{ width: '100%' }}>
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
