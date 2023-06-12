import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#000',
    },
    primary: {
      main: '#07c',
    },
    dark: {
      text: {
        primary: '#fff',
      },
      primary: {
        main: '#0cf',
      },
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontFamily: 'Helvetica, sans-serif',
    },
    h2: {
      fontFamily: 'Helvetica, sans-serif',
    },
    body1: {},
  },
  spacing: [0, 4, 8, 16, 32, 64],
});

export default theme;
