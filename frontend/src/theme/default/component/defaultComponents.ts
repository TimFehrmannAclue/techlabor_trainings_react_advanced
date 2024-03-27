import { Theme } from '@mui/material';

// Global default Styles of Mui react components
const defaultComponents = (theme: Theme) => ({
  // Global styles
  MuiCssBaseline: {
    styleOverrides: {
      '&::-webkit-scrollbar': {
        width: '10px',
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar-track': {
        borderRadius: '22px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: theme.palette.primary.main,
        borderRadius: 100,
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: theme.palette.primary.dark,
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        '&.Mui-focused': {
          color: '#222222',
        },
        '&.Mui-error': {
          color: theme.palette.error.main,
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        lineHeight: 1,
        width: 'fit-content',
        backgroundColor: theme.palette.background.paper,
        borderRadius: 4,
        padding: '2px 4px 2px 4px',
        marginLeft: 0,
        fontWeight: 700,
        alignSelf: 'center',
      },
    },
  },
  MuiTextField: {
    variants: [
      {
        props: { variant: 'outlined' },
        style: {
          [theme.breakpoints.only('xs')]: {
            width: 200,
          },
          [theme.breakpoints.up('sm')]: {
            width: 300,
          },
          '& .MuiFormLabel-root': {
            borderRadius: '8px 16px 0 4px',
            backgroundColor: 'white',
            left: -14,
            paddingRight: 16,
            paddingLeft: 16,
          },
          '& fieldset': {
            border: 'none',
          },
          '& .MuiInputBase-input': {
            borderRadius: 8,
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
          },
          '&& .MuiInputBase-input': {
            backgroundColor: 'white',
            borderRadius: 8,
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
          },
        },
      },
    ],
  },
});

export default defaultComponents;
