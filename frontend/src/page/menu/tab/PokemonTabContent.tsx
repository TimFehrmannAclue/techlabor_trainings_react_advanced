import React, { ReactElement, useRef, useState } from 'react';
import {
  Box, List, ListItem, ListItemText, TextField,
} from '@mui/material';

import { useGetPokemonQuery } from '../../../state/api/backend/raw/rawApi';

export default function PokemonTabContent(): ReactElement {
  const {
    data: getPokemonData,
    isLoading: getPokemonIsLoading,
    error: getPokemonError,
  } = useGetPokemonQuery();
  const items = getPokemonData ?? [];

  // todo use const items = useMemo(() => generateItems(), []);
  const [editingId, setEditingId] = useState<number | undefined>(undefined);
  const editingTextRef = useRef('');

  const handleEdit = (id: number) => {
    setEditingId(id);
  };

  const handleChange = (value: string) => {
    editingTextRef.current = value;
  };

  const handleSubmit = (id: number) => {
    // todo submit
    setEditingId(undefined);
  };

  return (
    <Box
      id="TableTabContent"
      sx={{
        overflowY: 'auto',
        maxHeight: 600,
        alignSelf: 'center',
        backgroundColor: '#EFEFEF',
      }}
    >
      <List>
        {items.map((item) => (
          <ListItem key={item.id} button onClick={() => handleEdit(item.id)}>
            {editingId === item.id ? (
              <TextField
                defaultValue={item.name}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={() => handleSubmit(item.id)}
                autoFocus
              />
            ) : (
              <ListItemText primary={item.name} />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
