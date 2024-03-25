import React, { ReactElement } from 'react';
import {
  Stack, styled, Tab, Tabs,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { SEARCH_PARAM_TAB } from '../../config/routeConfig';
import IContentTab from '../../../type/component/tab/IContentTab';

function findContentTabIndex(contentTabs: IContentTab[], text: string): number {
  return contentTabs.findIndex(({ headerText }) => headerText.toLowerCase() === text.toLowerCase());
}

const StyledTab = styled(Tab)(() => ({}));

interface IProps {
  contentTabs: IContentTab[];
}

export default function ContentTabs(props: IProps): ReactElement {
  const {
    contentTabs,
  } = props;

  // Get Tab from searchParams // todo example
  const [search, setSearch] = useSearchParams();
  const searchTab = search.get(SEARCH_PARAM_TAB);
  const activeHeaderText = searchTab ?? contentTabs[0].headerText;
  const activeContentTabIndex = findContentTabIndex(contentTabs, activeHeaderText);
  const activeContentTab = contentTabs[activeContentTabIndex];

  // Actions
  const handleSetTabIndex = (newContentTabIndex: number) => {
    const newContentTab = contentTabs[newContentTabIndex];
    if (newContentTab.headerText === activeContentTab.headerText) {
      return;
    }

    search.set(SEARCH_PARAM_TAB, newContentTab.headerText);
    setSearch(search);
  };

  return (
    <>
      <Stack
        id="ContentTabs"
        sx={{
          borderBottom: 1,
          borderColor: 'transparent',
          marginRight: 'auto',
          paddingLeft: 2,
        }}
      >
        <Tabs
          value={activeContentTabIndex}
          onChange={(e, newTabIndex) => (handleSetTabIndex(newTabIndex))}
        >
          {contentTabs.map(({ headerText }) => (
            <StyledTab
              key={headerText}
              label={headerText}
            />
          ))}
        </Tabs>
      </Stack>
      <Stack id="TabContentStack" width="inherit" height="inherit" flex={1}>
        {activeContentTab.content}
      </Stack>
    </>
  );
}
