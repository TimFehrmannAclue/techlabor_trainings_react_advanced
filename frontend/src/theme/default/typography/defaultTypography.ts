import { Theme } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const defaultTypography = (theme: Theme): TypographyOptions => ({
  fontFamily: [
    'Varela Round',
    'Cooper Black',
  ].join(','),
  h1: {
    fontWeight: 700,
    color: theme.palette.primary.contrastText,
    textShadow: '#00000066 0px 2px 4px',
  },
  body1: {
    fontWeight: 700,
  },
  button: {
    fontWeight: 700,
    fontSize: 18,
    textTransform: 'capitalize',
  },
});

export default defaultTypography;
