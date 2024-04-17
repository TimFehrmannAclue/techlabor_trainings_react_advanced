import { createTheme, responsiveFontSizes, Theme } from '@mui/material';

import defaultThemeOptions from './default/defaultThemeOptions';

const createDefaultTheme = (): Theme => {
  const themeOptions = defaultThemeOptions();
  const theme = createTheme(themeOptions);
  // Font size changes based on resolution
  return responsiveFontSizes(theme);
};

export default createDefaultTheme;
