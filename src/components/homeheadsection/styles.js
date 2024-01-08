import { makeStyles } from '@material-ui/styles';
import bg_Img from '../../assets/bg.jpg';

const useStyles = makeStyles((theme) => ({
  mainAboutHead: {
    position: 'relative',
    minHeight: '100vh',
    backgroundImage: `url(${bg_Img})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))',
  },
  content: {
    zIndex: 1,
    paddingLeft: '60px',
    paddingRight: '60px',
    [theme.breakpoints.down('sm')]: {
      padding: '40px',
    },
    paddingBottom:'150px'
  },
  typoHead: {
    fontSize: '5em',
    
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#ffffff',
    maxWidth: '100%',
    margin: '0 auto 5px',
    lineHeight: '1.2',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
    },
    marginBottom:'30px',
    marginTop:'40px'
  },
  typoSubHead: {
    fontSize: '4em',
    fontWeight: 600,
    textTransform: 'capitalize',
    color: '#ffffff',
    maxWidth: '100%',
    margin: '0',
    textDecoration: 'underline',
    textUnderlineOffset: '0.4em',
    lineHeight: '1.2',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
    },
    marginBottom: 40,
  },
  underline: {
    position: 'relative',
    left: 0,
    top:2,
    bottom: 0,
    width: '35.5%',
    height: '0.4em',
    background: 'rgb(125, 163, 117)', // Change the color to your preference
  },
  underline2: {
    position: 'relative',
    left: 0,
    top:2,
    bottom: 0,
    width: '39.5%%',
    height: '0.4em',
    background: 'yellow', // Change the color to your preference
  },
  subtitle: {
    color: '#5b8c51',
  },
}));

export default useStyles;
