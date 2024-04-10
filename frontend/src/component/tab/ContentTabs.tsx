import React, { ReactElement } from 'react';
import {
  Box,
  Stack, styled, Tab, Tabs,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { SEARCH_PARAM_TAB } from '../../config/routeConfig';
import IContentTab from '../../../type/component/tab/IContentTab';

const StyledBox = styled(Box)(() => ({
  width: 'inherit',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const HeaderTabStack = styled(Stack)(() => ({
  width: 'inherit',
  borderColor: 'transparent',
  marginRight: 'auto',
  flex: '0 0 auto', // Let it grow as needed without taking remaining space
}));

const ContentStack = styled(Stack)(() => ({
  maxHeight: 'inherit',
  flex: '1', // Take the remaining available space
  overflowY: 'auto', // Allow content to scroll if it exceeds available height
  width: 'inherit',
}));

// The Tabs component use indices to handle tab changes but url uses text-tokens to be more descriptive
function findContentTabIndex(contentTabs: IContentTab[], text: string): number {
  return contentTabs.findIndex(({ headerText }) => headerText.toLowerCase() === text.toLowerCase());
}

interface IProps {
  contentTabs: IContentTab[];
}

/**
 * Each Tab shall display specific content when being clicked.
 * Clicking on "Pokemon" shall render the content for Pokemon.
 * Each Tab is being passed as IContentTab
 */
export default function ContentTabs({ contentTabs }: IProps): ReactElement {
  // Get Tab from searchParams f.e: http://localhost:5173/menu?tab=Pokemon
  const [search, setSearch] = useSearchParams();
  const searchTab = search.get(SEARCH_PARAM_TAB);
  // If no searchTab is set use the first
  const activeHeaderText = searchTab ?? contentTabs[0].headerText;
  const activeContentTabIndex = findContentTabIndex(contentTabs, activeHeaderText);
  const activeContentTab = contentTabs[activeContentTabIndex];

  // Actions
  const handleSetTabIndex = (e: any, newContentTabIndex: number) => {
    const newContentTab = contentTabs[newContentTabIndex];
    const isSameTab = newContentTab.headerText === activeContentTab.headerText;
    if (isSameTab) {
      return;
    }

    search.set(SEARCH_PARAM_TAB, newContentTab.headerText);
    setSearch(search);
  };

  return (
    <StyledBox id="ContentTabs">

      <HeaderTabStack id="ContentTabsHeaderStack">
        <Tabs
          id="HeaderTabsContainer"
          value={activeContentTabIndex}
          onChange={handleSetTabIndex}
        >
          {contentTabs.map(({ headerText }) => (
            <Tab
              id="HeaderTab"
              key={headerText}
              label={headerText}
            />
          ))}
        </Tabs>
      </HeaderTabStack>

      <ContentStack
        id="ContentTabsContentStack"
      >
        {activeContentTab.content}
      </ContentStack>
    </StyledBox>
  );
}
