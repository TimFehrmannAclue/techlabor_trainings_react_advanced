import React, {
  ReactElement, useMemo, useRef, useState,
} from 'react';
import {
  Box, Button, List, ListItem, Stack,
} from '@mui/material';

import { IPokemon, useGetPokemonQuery, usePostPokemonMutation } from '../../../state/api/backend/raw/rawApi';
import EditableTextField from '../EditableTextField';

export default function PokemonTabContent(): ReactElement {
  // Query
  const {
    data: getPokemonData,
    isLoading: getPokemonIsLoading,
    error: getPokemonError,
  } = useGetPokemonQuery();
  const pokemons = getPokemonData ?? [];
  // Mutation
  const [postPokemonData] = usePostPokemonMutation();

  const editedPokemonsMap = useRef<Record<number, string>>({});
  const [hasEditedPokemons, setHasEditedPokemons] = useState(false);
  const editPokemonName = (id: number, name: string) => {
    editedPokemonsMap.current[id] = name;
    setHasEditedPokemons(true);
  };

  const handleSubmit = () => {
    const updatedPokemonData: IPokemon[] = pokemons.map((pokemon) => {
      const editedPokemonName = editedPokemonsMap.current[pokemon.id];
      return editedPokemonName ? {
        id: pokemon.id,
        name: editedPokemonName,
      } : pokemon;
    });

    console.info(updatedPokemonData);
    postPokemonData({ body: updatedPokemonData });
  };

  console.info('rerender');

  const memoizedList = useMemo(
    () => pokemons.map((pokemon) => (
      <ListItem key={pokemon.id}>
        <EditableTextField
          defaultValue={pokemon.name}
          onChange={(value) => editPokemonName(pokemon.id, value)}
        />
      </ListItem>
    )),
    [pokemons],
  );

  return (
    <Stack
      id="TableTabContentStack"
      sx={{

        maxHeight: 600,
        gap: 2,
        alignItems: 'center',
      }}
    >
      <Box
        id="TableTabListBox"
        sx={{
          overflowY: 'auto',
          alignSelf: 'center',
          backgroundColor: '#EFEFEF',
        }}
      >
        <List>{memoizedList}</List>
      </Box>
      <Button
        variant="contained"
        onClick={() => {
        }}
        disabled={!hasEditedPokemons}
        sx={{
          width: 'min-content',
        }}
      >
        Reset
      </Button>
      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={!hasEditedPokemons}
        sx={{
          width: 'min-content',
        }}
      >
        Submit
      </Button>
    </Stack>
  );
}
