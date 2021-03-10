// import { fade } from '@material-ui/core/styles';

const LandingPageStyles = (theme) => ({
  toolbar: theme.mixins.toolbar,
  filledInput: {
    background: theme.palette.background.paper,
    borderRadius: '4px',
  },
  bannerSection: {
    display: 'flex',
    flexGrow: 1,
    height: '60vh',
    [theme.breakpoints.down('sm')]: {
      height: '100vh',
    },
    // overflow: 'auto',
    flexDirection: 'column',
    // backgroundColor: theme.palette.tertary.main,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    backgroundAttachment: 'fixed',
    // background: `url(${Layer})`,
    background: 'url(https://img.freepik.com/foto-gratis/grupo-jovenes-estudiantes-felices-universidad_85574-4531.jpg?size=626&ext=jpg&ga=GA1.2.1212857596.1613779200)'
  },
  infoPanelSection: {
    display: 'flex',
    flexGrow: 1,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      height: '50vh',
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%',
      padding: '2rem 0',
    },
    // overflow: 'auto',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
  },
  blogSection: {
    display: 'flex',
    flexGrow: 1,
    minHeight: '50vh',
    height: '100%',
    padding: '2rem 0',
    [theme.breakpoints.down('sm')]: {
      height: '100vh',
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%',
    },
    // overflow: 'auto',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
  },
  servicesSection: {
    display: 'flex',
    flexGrow: 1,
    height: '100%',
    padding: '2rem 0',
    // overflow: 'auto',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
  },
  contactSection: {
    display: 'flex',
    flexGrow: 1,
    height: '100%',
    padding: '2rem 0',
    // overflow: 'auto',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
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
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  avatarSize: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    background: theme.palette.secondary.main,
    marginTop: '6px',
    borderRadius: 15,
    color: '#fff',
  },
  post: {
    display: 'flex',
  },
  pstDetails: {
    flex: 1,
  },
  postMedia: {
    width: 300,
  },
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
});

export default LandingPageStyles;
