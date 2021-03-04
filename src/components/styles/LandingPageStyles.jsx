import { fade } from '@material-ui/core/styles';

const LandingPageStyles = (theme) => ({
  toolbar: theme.mixins.toolbar,
  banner: {
    display: 'flex',
    flexGrow: 1,
    height: '60vh',
    [theme.breakpoints.down('sm')]: {
      height: '100vh',
    },
    // overflow: 'auto',
    flexDirection: 'column',
    backgroundColor: theme.palette.tertary.main
  },
  infoPanel: {
    display: 'flex',
    flexGrow: 1,
    height: '25vh',
    [theme.breakpoints.down('sm')]: {
      height: '50vh',
    },
    [theme.breakpoints.down('xs')]: {
      height: '100vh',
    },
    // overflow: 'auto',
    flexDirection: 'column',
    backgroundColor: theme.palette.quaternary.main
  },
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
  bannerButton: {
    width: '200px',
  },
  avatarSize: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    // background: GlobalStyles.clientsGradient,
    marginTop: '6px',
    borderRadius: 15,
    color: '#fff',
  },
});

export default LandingPageStyles;
