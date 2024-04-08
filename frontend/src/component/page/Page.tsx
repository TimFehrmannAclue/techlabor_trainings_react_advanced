import React, { ReactNode } from 'react';
import { styled, SxProps, Typography } from '@mui/material';

import PageBody from '../body/PageBody';

const HeaderTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(-0.75),
  paddingBottom: theme.spacing(2),
}));

interface IProps {
  children: ReactNode;
  headerText?: string;
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
    sx,
  } = props;

  return (
    <PageBody sx={sx}>
      {headerText
        ? <HeaderTypography variant="h4">{headerText}</HeaderTypography>
        : null}
      {children}
    </PageBody>
  );
}
