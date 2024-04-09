import React, { ReactElement } from 'react';
import { Grid } from '@mui/material';

import Page from '../../component/page/Page';
import notFoundGif from '../../image/notFound.gif';

/**
 * 404 Page not found
 */
export default function NotFoundPage(): ReactElement {
  return (
    <Page headerText="404 - Page not found">
      <Grid container spacing={2} justifyContent="center" height="100%">
        <Grid item xs={10}>
          <img src={notFoundGif} alt="Not Found" />
        </Grid>
      </Grid>
    </Page>
  );
}
