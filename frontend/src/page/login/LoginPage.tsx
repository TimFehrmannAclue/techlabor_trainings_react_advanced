import React, { useEffect } from 'react';
import {
  Button, Grid, Stack, styled, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';

import Page from '../../component/page/Page';
import SimpleBackground from '../../component/image/SimpleBackground';
import backgroundImage from '../../image/app_background_image_hd_upscaled.jpg';
import FormTextField from '../../component/form/FormTextField';
import { usePostLoginMutation } from '../../state/api/pokemon/pokemonApi';
import { setLoggedIn } from '../../state/slice/loginSlice';
import yup from '../../config/yupLocalizationConfig';
import ResponsiveLoadingBackdrop from '../../component/backdrop/ResponsiveLoadingBackdrop';

// Validation for a single form with multiple input
// https://github.com/jquense/yup
const yupSchema = object({
  email: yup.string()
    .email()
    .required(),
  password: yup.string()
    .required()
    .min(4),
});

const HeaderTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontFamily: 'Cooper Black',
  paddingBottom: theme.spacing(8),
}));

const LoginGrid = styled(Grid)(({ theme }) => ({
  paddingBottom: theme.spacing(24),
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}));

const LoginForm = styled('form')(() => ({
  maxWidth: 400,
  flex: 1,
}));

const TextFieldStack = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1),
  paddingBottom: theme.spacing(4),
  alignItems: 'center',
}));

export default function LoginPage() {
  const dispatch = useDispatch();

  const [login, {
    data: loginData,
    isLoading: loginIsLoading,
    error: loginError,
  }] = usePostLoginMutation();

  // Handle login Response
  useEffect(() => {
    if (loginError || loginIsLoading || !loginData) {
      return;
    }

    console.info('LoginPage - received jwt: ', loginData.jwt);
    // No need to navigate as LoginRoute automatically redirects
    dispatch(setLoggedIn(loginData.jwt));
  }, [loginData, loginIsLoading, loginError]);

  // An input form using react-hook-form
  const {
    getValues,
    control,
    formState: { errors },
    handleSubmit: formSubmit,
  } = useForm({
    // Validate when exiting input field
    mode: 'onBlur',
    // Integrating yup for validation
    resolver: yupResolver(yupSchema),
    defaultValues: {
      email: 'user@mail.com',
      password: 'userPassword',
    },
  });
  const hasErrors = Object.keys(errors).length > 0;

  const handleSubmit = () => {
    // Get data entered into form from react-hook-form state
    const { email, password } = getValues();
    // Run redux-toolkit login mutation
    login({ body: { email, password } });
  };

  return (
    <Page sx={{ padding: 0 }}>
      {loginIsLoading ? <ResponsiveLoadingBackdrop /> : null}
      <SimpleBackground backgroundImage={backgroundImage} />
      <LoginGrid
        item
        md={12}
        container
      >
        <LoginForm
          onSubmit={formSubmit(handleSubmit)}
          noValidate
        >
          <HeaderTypography
            id="LOGOIN"
            variant="h1"
          >
            LOGOIN
          </HeaderTypography>
          <TextFieldStack id="TextFieldStack">
            <FormTextField
              id="EmailTextField"
              key="email"
              control={control}
              label="Email"
              field="email"
              variant="outlined"
              required
            />
            <FormTextField
              id="PasswordTextField"
              key="password"
              control={control}
              field="password"
              label="Password"
              type="password"
              variant="outlined"
              required
            />
          </TextFieldStack>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={hasErrors}
          >
            Login
          </Button>
        </LoginForm>
      </LoginGrid>
    </Page>
  );
}
