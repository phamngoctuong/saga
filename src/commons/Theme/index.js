import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  colors: {
    primary: '#FF5252',
    secondary: '#0288D1',
    error: '#FF5722'
  },
  typoraphy: {
    fontFamily: "Roboto"
  },
  shape: {
    borderRadius: 4,
    textColor: '#ffffff'
  }
});
export default theme;