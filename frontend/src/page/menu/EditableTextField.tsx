import { TextField } from '@mui/material';
import {
  ChangeEvent, ReactElement, useEffect, useState,
} from 'react';

interface IProps {
  defaultValue: string;
  onChange: (value: string) => void;
  onSelect: () => void;
  registerReset: (reset: () => void) => void;
}

function EditableTextField({
  defaultValue, onChange, onSelect, registerReset,
}: IProps): ReactElement {
  const [value, setValue] = useState(defaultValue);

  // Update Text
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  // Undo Changes
  const handleReset = () => {
    setValue(defaultValue);
  };

  // Allow parent component to reset this without Rerendering
  useEffect(() => {
    registerReset(handleReset);
  }, [registerReset]);

  return (
    <TextField
      variant="standard"
      value={value}
      onChange={handleChange}
      onSelect={onSelect}
    />
  );
}

export default EditableTextField;
