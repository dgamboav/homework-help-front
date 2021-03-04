import { fade } from '@material-ui/core/styles';

const AppStyles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    color: theme.palette.primary.main
  },
  toolbar: theme.mixins.toolbar,
  logo: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    backgroundColor: '#fff',
    position: 'relative',
    top: 20,
  },
  buttonRounded: {
    borderRadius: 30,
    textTransform: 'none',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: '1rem',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      marginRight: 0,

    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },ifyContent: 'center',
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  container: {
    paddingTop: '1rem',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    // backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    // background: theme.palette.primary.main,
  },
  card: {
    '&:hover': {
      boxShadow: '0 10px 20px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
  },
  cardPicture: {
    display: 'flex',
    '&:hover': {
      boxShadow: '0 10px 20px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
  },
  cardContent: {
    '&:last-child': {
      paddingBottom: 14,
    },
  },
  cardHeader: {
    marginLeft: '0px !important',
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  justifyFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(0, 1),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  large: {
    backgroundColor: theme.palette.primary.main,
  },
  iconSmall: {
    
  },
  cover: {
    width: 151,
  },
  noWrapText: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  wrapText: {
    wordWrap: 'break-word',
  },
  drawer: {
  },
  drawerList: {
    width: 250,

  },
  landingContainer: {
    display: 'flex',
    flexGrow: 1,
    height: '50vh',
    overflow: 'auto',
    flexDirection: 'column',
    backgroundColor: theme.palette.tertary.main
  },
});

export default AppStyles;
