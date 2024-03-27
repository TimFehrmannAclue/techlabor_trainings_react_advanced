import React, { ReactElement } from 'react';
import { Grid, Paper } from '@mui/material';

import Page from '../../component/page/Page';
import ContentTabs from '../../component/tab/ContentTabs';

import PokemonTabContent from './tab/PokemonTabContent';
import AccountTab from './tab/AccountTab';

/**
 * The main menu displayed after Login
 */
export default function MenuPage(): ReactElement {
  return (
    <Page headerText="Menu">
      <Grid container spacing={2} justifyContent="center" height="100%">
        <Grid item xs={10}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <ContentTabs
              contentTabs={[
                {
                  headerText: 'Pokemon',
                  content: <PokemonTabContent />,
                },
                {
                  headerText: 'Account',
                  content: <AccountTab />,
                },
              ]}
            />
          </Paper>
        </Grid>
      </Grid>
    </Page>
  );
}
