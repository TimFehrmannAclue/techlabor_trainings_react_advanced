import { ReactElement } from 'react';

export default interface IContentTab {
  // Name of the Tab
  headerText: string;
  // Content to be displayed when clicking the Tab
  content: ReactElement;
}
