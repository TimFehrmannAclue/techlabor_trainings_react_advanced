import React, { ReactElement } from 'react';

import Page from '../../component/page/Page';
import ContentTabs from '../../component/tab/ContentTabs';

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
            headerText: 'Menu',
            content: <p>Menu</p>,
          },
          {
            headerText: 'Table',
            content: <p>Table</p>,
          },
        ]}
      />
    </Page>
  );
}
