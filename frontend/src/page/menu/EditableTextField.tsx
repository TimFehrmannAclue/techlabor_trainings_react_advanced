import { styled, TextField } from '@mui/material';
import {
  ChangeEvent, ForwardedRef, forwardRef, ReactElement, useEffect, useImperativeHandle, useState,
} from 'react';

const StyledTextField = styled(TextField)(() => ({
  borderRadius: 0,
  '&& .MuiInputBase-input': {
    boxShadow: 'none',
  },
}));

interface IProps {
  defaultValue: string;
  onChange: (value: string) => void;
  registerReset: (reset: () => void) => void;
}

function EditableTextField({ defaultValue, onChange, registerReset }: IProps): ReactElement {
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
  }

  // Allow parent component to reset this without Rerendering
  useEffect(() => {
    registerReset(handleReset);
  }, [registerReset]);

  return (
    <StyledTextField
      variant="standard"
      value={value}
      onChange={handleChange}
    />
  );
}

export default EditableTextField;
