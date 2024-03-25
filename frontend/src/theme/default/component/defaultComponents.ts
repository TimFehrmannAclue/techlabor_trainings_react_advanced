import { Theme } from '@mui/material';

// Global default Styles of Mui react components
const defaultComponents = (theme: Theme) => ({
  MuiTextField: {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      root: {
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
        '& fieldset': { border: 'none' },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        '& .MuiInputBase-input': {
          backgroundColor: 'white',
          borderRadius: 8,
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
        },
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        '&.Mui-focused': {
          // Set your desired label color when focused
          color: '#222222',
        },
        '&.Mui-error': {
          // Set your desired label color when focused
          color: theme.palette.error.main,
        },
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: (props: { id: string; }) => ({
        ...(props.id === 'CustomSelectFormControl' && {
          minWidth: 200,
          width: '100%',
          textAlign: 'left',
        }),
      })
      ,
    },
  },
  // Overriding Autofill Color
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        '&:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 100px #fff inset',
          // WebkitTextFillColor: '#fff',
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        // less vertical space between error texts below formField
        lineHeight: 1,
        width: 'fit-content',
        backgroundColor: 'white',
        borderRadius: 4,
        padding: '2px 4px 2px 4px',
        marginLeft: 0,
        fontWeight: 700,
        alignSelf: 'center',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        // less vertical space between error texts below formField
        [theme.breakpoints.down('sm')]: {
          minWidth: 100,
          width: 'fit-content',
        },
      },
    },
  },
});

export default defaultComponents;
