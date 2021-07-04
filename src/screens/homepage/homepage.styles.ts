import { stylesheet } from 'typestyle'

export default stylesheet({
  homepage: {
    margin: '0 auto',
    width: '80%',
  },
  figureLogo: {
    width: '400px',
    margin: '0 auto',
    marginTop: '70px',
  },
  figureLogo__logo: {
    width: '100%',
  },
  figureMessage: {
    width: '1500px',
  },
  figureMessage__message: {
    width: '100%',
  },
  welcomeText: {
    textAlign: 'center',
    color: '#ff7d25',
    fontSize: '60px',
    fontWeight: 700,
    margin: 0,
  },
  description: {
    marginBottom: '50px',
    margin: '0 auto',
    width: '70%',
    textAlign: 'center',
    letterSpacing: '0px',
    color: '#292b50',
    fontWeight: 500,
    fontSize: '20px',
  },
  launch: {
    display: 'flex',
    justifyContent: 'center',
  },
  launchButton: {
    width: '420px',
    border: 'none',
    borderRadius: '6px',
    textDecoration: 'none',
    backgroundColor: '#388861',
    color: '#ffffff',
    fontSize: '30px',
    fontWeight: 800,
    padding: '20px',
    textAlign: 'center',
    marginTop: '5px',
    '&:hover': {
      backgroundColor: '#1f5c3e',
      color: '#ffffff',
      textDecoration: 'none',
    },
  },
})
