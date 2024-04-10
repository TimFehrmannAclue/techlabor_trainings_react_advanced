import React, { ReactElement } from 'react';

import Page from '../../component/page/Page';
import notFoundGif from '../../image/notFound.gif';

/**
 * 404 Page not found
 */
export default function NotFoundPage(): ReactElement {
  return (
    <Page>
      <img src={notFoundGif} alt="Not Found" style={{ maxHeight: '100%', width: 'fit-content', alignSelf: 'center' }} />
    </Page>
  );
}
