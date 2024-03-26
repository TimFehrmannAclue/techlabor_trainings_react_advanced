import React, { useEffect } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';

import { setLoggedIn } from '../../../state/slice/loginSlice';
import FormTextField from '../../../component/form/TextField';
import { usePostLoginMutation } from '../../../state/api/backend/raw/rawApi';
import yup from '../../../config/yupLocalizationConfig';
import { setSnackbar } from '../../../state/slice/snackbarSlice';
import IRtkError from '../../../../type/rtk/IRtkError';

const yupSchema = object({
  email: yup.string().email().required(),
  password: yup.string().required().min(4),
});

/**
 * A Validated login form with redirect
 */
export default function LoginForm() {
  const dispatch = useDispatch();

  const [login, {
    data: jwt,
    isLoading: loginIsLoading,
    error: loginError,
  }] = usePostLoginMutation();

  useEffect(() => {
    if (loginError) {
      console.error('LoginForm - loginError: ', loginError);
      // todo set type in rtk query
      const error = loginError as IRtkError;
      dispatch(setSnackbar({ text: error.data.message, severity: 'error' }));
    }

    if (loginIsLoading) {
      return;
    }

    if (!jwt) {
      return;
    }

    // No need to navigate as LoginRoute automatically redirects
    dispatch(setLoggedIn(jwt));
  }, [jwt, loginIsLoading, loginError]);

  // Form
  const {
    getValues,
    control,
    formState: { errors },
    handleSubmit: formSubmit,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(yupSchema),
    defaultValues: {
      email: 'user@mail.com',
      password: 'userPassword',
    },
  });
  const hasErrors = Object.keys(errors).length > 0;

  const handleSubmit = () => {
    const { email, password } = getValues();
    login({ body: { email, password } });
  };

  return (
    <form
      onSubmit={formSubmit(handleSubmit)}
      noValidate
      style={{ maxWidth: 400, flex: 1 }}
    >
      <Stack
        id="FormStack"
        spacing={2}
        flex={1}
        alignItems="center"
      >

        <Typography
          id="LOGOIN"
          variant="h1"
          fontWeight="bold"
          fontFamily="Cooper Black"
          pb={8}
        >
          LOGOIN
        </Typography>

        <Stack
          id="FormElementStack"
          spacing={1}
          pb={4}
          sx={{
            alignItems: 'center',
          }}
        >
          <FormTextField
            key="email"
            control={control}
            field="email"
            label="Email"
            required
            variant="outlined"
          />
          <FormTextField
            key="password"
            control={control}
            field="password"
            label="Password"
            required
            type="password"
            variant="outlined"
          />
        </Stack>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={hasErrors}
        >
          Anmelden
        </Button>
      </Stack>
    </form>
  );
}
