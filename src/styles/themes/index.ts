import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    common: {
      black: '#282828'
    }
  },
  typography: {
    h1: {
      fontSize: '3rem'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: '999px',
          padding: '8px 32px'
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          transform: 'translate(30px, 16px) scale(1)',

          '&[data-shrink=true]': {
            transform: 'translate(20px, -9px) scale(0.75)',
          },

          ...(ownerState.size === 'small') && {
            transform: 'translate(30px, 9px) scale(1)',
          }
        })
      }
    },
    MuiTextField: {
      defaultProps: {
        margin: "normal",
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          paddingLeft: '30px',
        },
        notchedOutline: {
          padding: '0px 13px'
        },
        root: {
          borderRadius: '999px',
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: #dfdfdf;
        }
      `
    }
  }
})