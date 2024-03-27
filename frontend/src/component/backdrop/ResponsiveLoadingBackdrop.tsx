import React from 'react';
import { Stack, styled, SxProps } from '@mui/material';

import LoadingBackdrop from './LoadingBackdrop';

const Root = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  zIndex: 100,
  borderRadius: theme.shape.borderRadius,
}));

interface IProps {
    sx?: SxProps;
}

/**
 * Loading Overlay that adjusts itself to its parents dimensions
 */
export default function ResponsiveLoadingBackdrop({ sx }: IProps) {
  return (
    <Root
      id="PageContentLoading"
      sx={sx}
    >
      <LoadingBackdrop />
    </Root>
  );
}
