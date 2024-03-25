import React from 'react';
import {
  InputBaseComponentProps, SxProps, TextField, TextFieldVariants,
} from '@mui/material';
import { Control, Controller } from 'react-hook-form';

import { IRefType } from '../../../type/component/common/IRefType';

interface IProps {
    id?: string;
    field: 'email' | 'password'; // todo move?
    label: string;
    type?: 'string' | 'number' | 'password';
    placeholder?: string;
    required?: boolean;
    variant?: TextFieldVariants;
    disabled?: boolean;
    inputProps?: InputBaseComponentProps | undefined;
    control: Control<any>;
    sx?: SxProps;
}

/**
 * A validated TextField
 */
export default function FormTextField(props: IProps) {
  const {
    id,
    field,
    label,
    placeholder,
    type,
    required,
    control,
    variant,
    disabled,
    inputProps,
    sx,
  } = props;

  // Only explicit ref onBlur() seems to work to clear focus on f.e. enter press
  const textFieldRef: IRefType = React.createRef();

  return (
    <Controller
      name={field}
      control={control}
      render={({
        field: { onChange, onBlur, value },
        formState,
      }) => {
        const errorText = formState.errors[field] && `${formState.errors[field]?.message}`;
        return (
          <TextField
            id={id}
            inputRef={textFieldRef}
            variant={variant ?? 'standard'}
            label={label}
            placeholder={placeholder}
            value={value}
            inputProps={{
              ...inputProps,
            }}
            onChange={(e) => {
              onChange(e);
              // Will remove existing error onFocus but not display new ones
              if (formState.errors[field]) {
                onBlur();
              }
            }}
            onBlur={onBlur}
            onKeyDown={(e) => {
              // Multiline input should allow f.e. line breaks
              if (e.key === 'Enter') {
                textFieldRef.current?.blur();
              }
            }}
            required={required}
            type={type ?? 'default'}
            error={!!formState.errors[field]}
            helperText={errorText ?? ' '}
            disabled={disabled}
            sx={{
              ...sx,
              '& .MuiFormHelperText-root': {
                backgroundColor: errorText ? 'white' : 'transparent',
              },
            }}
          />
        );
      }}
    />
  );
}
