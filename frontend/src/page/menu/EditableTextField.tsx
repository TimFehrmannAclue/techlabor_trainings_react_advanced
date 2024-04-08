import { styled, TextField } from '@mui/material';
import {
  ChangeEvent, ForwardedRef, forwardRef, ReactElement, useImperativeHandle, useState,
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
}

function EditableTextField({ defaultValue, onChange }: IProps, ref: ForwardedRef<any>): ReactElement {
  const [value, setValue] = useState(defaultValue);

  // useImperativeHandle allows child components to pass references to parent components.
  // This allows the parent component to reset the child component.
  useImperativeHandle(ref, () => ({
    reset() {
      setValue(defaultValue);
    },
  }));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <StyledTextField
      variant="standard"
      value={value}
      onChange={handleChange}
    />
  );
}

export default forwardRef(EditableTextField);
