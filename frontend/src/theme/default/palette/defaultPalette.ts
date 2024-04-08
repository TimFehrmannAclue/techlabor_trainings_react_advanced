import { PaletteOptions } from '@mui/material';

const defaultPaletteLight: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#45B2ED',
    contrastText: '#fff',
  },
  secondary: {
    main: '#f7f0de',
  },
  background: {
    default: '#f3f6f999',
    paper: '#ffffff',
  },
  action: {
    disabledBackground: 'rgb(69,178,237)',
    disabled: 'rgba(255,255,255,0.5)',
  },
  // Custom object which has been added via palette-mui.d.ts
  overlay: {
    main: '#0000004d',
  },
};
const defaultPalette = (): PaletteOptions => (defaultPaletteLight);
export default defaultPalette;
