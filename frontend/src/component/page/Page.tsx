import React, { ReactNode } from 'react';
import {
  Stack, styled, SxProps, Typography,
} from '@mui/material';

import PageBody from '../body/PageBody';
import ResponsiveLoadingBackdrop from '../backdrop/ResponsiveLoadingBackdrop';

const PageStack = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  width: 'inherit',
  minHeight: 'inherit',
  height: 'auto',
  padding: theme.spacing(2),
  paddingBottom: theme.spacing(4),
}));

interface IProps {
    children: ReactNode;
    headerText?: string;
    alignTextLeft?: boolean;
    isLoading?: boolean;
    sx?: SxProps;
}

/**
 * Everything below the Appbar is in this Page component
 * It provides a loading overlay & an optional headerText
 */
export default function Page(props: IProps) {
  const {
    children,
    headerText,
    alignTextLeft,
    isLoading,
    sx,
  } = props;

  return (
    <PageBody>
      <PageStack
        id="Page"
        sx={sx}
      >
        {isLoading ? <ResponsiveLoadingBackdrop /> : null}
        {headerText
          ? (
            <Stack
              id="HeaderStack"
              alignSelf={alignTextLeft ? 'start' : 'center'}
              alignItems={alignTextLeft ? 'start' : 'center'}
              pl={alignTextLeft ? 2 : 0}
              pb={2}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                mb={-0.75}
              >
                {headerText}
              </Typography>
            </Stack>
          )
          : null}
        {children}
      </PageStack>
    </PageBody>
  );
}
