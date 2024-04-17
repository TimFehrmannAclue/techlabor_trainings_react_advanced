import React, { ReactElement } from 'react';
import { Paper } from '@mui/material';

import ContentTabs from '../../component/tab/ContentTabs';
import Page from '../../component/page/Page';

import PokemonTabContent from './tab/PokemonTabContent';
import AccountTab from './tab/AccountTab';

/**
 * The main menu displayed after Login
 */
export default function MenuPage(): ReactElement {
  return (
    <Page>
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
    </Page>
  );
}
