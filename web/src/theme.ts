import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      paper: "#1E2226",
      default: '#12181E',
    },
    primary: {
      light: '#ffffff',
      main: '#3661FC',
      dark: '#101FD1',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff7961',
      main: '#ef233c',
      dark: '#ba000d',
      contrastText: '',
    },
    text: {
      primary: '#ffffff'
    }
  }
});
