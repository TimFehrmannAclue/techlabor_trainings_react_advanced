import React from 'react';
import {
  InputBaseComponentProps, SxProps, TextField, TextFieldVariants,
} from '@mui/material';
import { Control, Controller } from 'react-hook-form';

import { IRefType } from '../../../type/component/common/IRefType';

interface IProps {
    field: 'email' | 'password';
    label: string;
    control: Control<any>;
    id?: string;
    type?: 'string' | 'number' | 'password';
    placeholder?: string;
    required?: boolean;
    variant?: TextFieldVariants;
    disabled?: boolean;
    inputProps?: InputBaseComponentProps | undefined;
    sx?: SxProps;
}

/**
 * A validated TextField
 * Displays errors after leaving TextField (onBlur) to avoid error text flickering while typing
 * Removes error while typing to give immediate feedback
 * Uses react-hook-form to access state and yup is already integrated into the form component for validation
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
        const optionalErrorText = formState.errors[field] && `${formState.errors[field]?.message}`;
        return (
          <TextField
            id={id}
            inputRef={textFieldRef}
            variant={variant ?? 'standard'}
            label={label}
            placeholder={placeholder}
            value={value}
            inputProps={{ ...inputProps }}
            onChange={(e) => {
              onChange(e);
              // Will remove existing error onFocus but not display new ones
              if (formState.errors[field]) {
                onBlur();
              }
            }}
            onBlur={onBlur}
            required={required}
            type={type ?? 'default'}
            error={!!formState.errors[field]}
            helperText={optionalErrorText ?? ' '}
            disabled={disabled}
            // Ui Fix: ErrorTexts shall only have a backgroundColor when being displayed
            sx={{
              ...sx,
              '& .MuiFormHelperText-root': {
                backgroundColor: optionalErrorText ? 'white' : 'transparent',
              },
            }}
          />
        );
      }}
    />
  );
}
