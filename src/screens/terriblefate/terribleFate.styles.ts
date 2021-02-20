import { stylesheet } from 'typestyle';

export default stylesheet({
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -100,
  },
  failure: {
    textAlign: 'center',
    marginTop: '200px',
  },
  failure__video: {
    width: '100%',
  },
  iframe: {
    border: 'none',
  },
  failure__button: {
    display: 'flex',
    justifyContent: 'center',
  },
  failure__credits: {
    margin: '0 auto',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: '25px',
    fontWeight: 800,
    border: 'none',
    borderRadius: '15px',
    marginTop: '50px',
    padding: '20px',
    width: '420px',
    textDecoration: 'none',
    backgroundColor: '#b75053',
    '&:hover': {
      backgroundColor: '#6d1919',
      color: '#ffffff',
      textDecoration: 'none',
    },
  },
});
