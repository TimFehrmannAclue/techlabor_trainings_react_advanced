import {
  createTheme, responsiveFontSizes, Theme, ThemeOptions,
} from '@mui/material';
import shadows from '@mui/material/styles/shadows';

import defaultComponents from './component/defaultComponents';
import defaultTypography from './typography/defaultTypography';
import defaultShape from './shape/defaultShape';
import defaultPalette from './palette/defaultPalette';

/**
 * Combining several ThemeOptions into one Theme
 */
const defaultThemeOptions = (): ThemeOptions => {
  // Get Palette based on DarkMode - F.e. Colors for Text, Background
  const palette = defaultPalette();
  // Global settings - F.e. Border Radius, Spacing
  const shape = defaultShape();

  // Palette & Shape options are precompiled once to be used on other options
  const createAppTheme = (options: ThemeOptions): Theme => responsiveFontSizes(createTheme(options));
  const tempTheme = createAppTheme({
    palette,
    shape,
  });

  // Create Typography using Palette - Font Family, Font Size, Font Color, etc.
  const typography = defaultTypography(tempTheme);

  // Add or override Components - F.e. Buttons, Button variants, etc.
  const components = defaultComponents(tempTheme);

  return {
    palette,
    typography,
    shadows,
    // @ts-ignore ToDo Refactoring: Fix Type
    components,
    shape,
  };
};

export default defaultThemeOptions;
