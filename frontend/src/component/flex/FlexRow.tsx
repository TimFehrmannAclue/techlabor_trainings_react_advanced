import { ReactElement } from 'react';
import { Box, SxProps } from '@mui/material';

interface IProps {
    sx?: SxProps;
    children: ReactElement | ReactElement[];
}

export default function FlexRow({ sx, children }: IProps): ReactElement {
  return (
    <Box
      id="FlexRow"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: 'inherit',
        flex: 1,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
