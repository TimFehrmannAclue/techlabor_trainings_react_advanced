import { TextField } from '@mui/material';
import { ReactElement, useRef } from 'react';

export default function EditableTextField({ defaultValue, onChange }: { defaultValue: string; onChange: (value: string) => void }): ReactElement {
  const textFieldRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    if (textFieldRef.current) {
      onChange(textFieldRef.current.value);
    }
  };

  return (
    <TextField
      defaultValue={defaultValue}
      inputRef={textFieldRef}
      onChange={handleChange}
      autoFocus
    />
  );
}
