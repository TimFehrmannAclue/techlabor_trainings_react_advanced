import React, { ReactElement } from 'react';
import { Box, SxProps } from '@mui/material';

interface IProps {
    backgroundImage: string;
    sx?: SxProps;
}

/**
 * Default styles for an image background
 * @param backgroundImage Any image
 * @param sx optional styles
 */
export default function SimpleBackground({ backgroundImage, sx }: IProps): ReactElement {
  return (
    <Box
      id="Background"
      sx={{
        zIndex: -10,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        ...sx,
      }}
    />
  );
}
