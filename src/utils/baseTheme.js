import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF6E21',
      contrastText: 'white',
    },
    secondary: {
      main: '#B8000D',
    },
    third: {
      main: '#4D4D4D',
    },
  },
  typography: {},
  overrides: {
    MuiButton: {
      contained: {
        text: {
          color: 'white',
        },
      },
    },
  },
});
