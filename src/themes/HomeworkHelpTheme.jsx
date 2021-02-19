import { createMuiTheme } from '@material-ui/core/styles';
import { esES } from '@material-ui/core/locale';
// import Nunito from '../fonts/NunitoFont';
// import Quicksand from '../fonts/QuicksandFont';
// import Rubik from '../fonts/RubikFont';

const HomeworkHelpTheme = createMuiTheme({
  // typography: {
  //   fontFamily: 'Nunito, Quicksand, Rubik, Arial',
  // },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '@font-face': [Nunito],
  //     },
  //   },
  // },
  palette: {
    primary: {
      light: '#59abf2',
      main: '#007cbf',
      dark: '#00508e',
      gradient: '',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#55d9b0',
      main: '#00a781',
      dark: '#007755',
      gradient: '',
      contrastText: '#ffffff',
    },
    tertary: {
      light: '#aef68c',
      main: '#7cc35d',
      dark: '#4b922f',
      gradient: '',
      contrastText: '#ffffff',
    },
    quaternary: {
      light: '#6f6edf',
      main: '#3943ac',
      dark: '#001c7c',
      gradient: '',
      contrastText: '#ffffff',
    },
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#000000',
  },
}, esES);

export default HomeworkHelpTheme;