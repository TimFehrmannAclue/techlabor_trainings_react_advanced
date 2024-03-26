import React, { ReactElement } from 'react';

import Page from '../../component/page/Page';
import ContentTabs from '../../component/tab/ContentTabs';

import PokemonTabContent from './tab/PokemonTabContent';

/**
 * The main menu displayed after Login
 */
export default function MenuPage(): ReactElement {
  return (
    <Page
      headerText="Menu"
    >
      <ContentTabs
        contentTabs={[
          {
            // todo use route names
            headerText: 'Pokemon',
            content: <PokemonTabContent />,
          },
          {
            // todo use route names
            headerText: 'Account',
            content: <p>Account</p>,
          },
        ]}
      />
    </Page>
  );
}
