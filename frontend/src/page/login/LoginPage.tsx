import React from 'react';
import { Grid } from '@mui/material';

import Page from '../../component/page/Page';
import SimpleBackground from '../../component/image/SimpleBackground';
import backgroundImage from '../../image/app_background_image_hd_upscaled.jpg';

import LoginForm from './component/LoginForm';

export default function LoginPage() {
  return (
    <Page
      headerText=""
      sx={{ padding: 0 }}
    >

      <SimpleBackground backgroundImage={backgroundImage} />

      <Grid
        item
        md={12}
        container
        pb={24}
        sx={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LoginForm />
      </Grid>
    </Page>
  );
}
