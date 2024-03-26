import React, { ReactElement } from 'react';

import Page from '../../component/page/Page';
import ContentTabs from '../../component/tab/ContentTabs';

import PokemonTabContent from './tab/PokemonTabContent';
import TestTab from './tab/TestTab';

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
            content: <TestTab />,
          },
        ]}
      />
    </Page>
  );
}
