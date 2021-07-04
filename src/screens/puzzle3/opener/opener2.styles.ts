import { stylesheet } from 'typestyle'

export default stylesheet({
  background: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'black',
    width: '100vw',
    height: '100vh',
    position: 'absolute',
  },
  puzzle3__figure__mask: {
    width: '30%',
    margin: 'auto',
    position: 'relative',
  },
  puzzle3__figure__mask__img: {
    width: '100%',
    marginTop: '150px',
  },
  puzzle3__opener__button: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  puzzle3__opener__button__a: {
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
    backgroundColor: '#5341ae',
    '&:hover': {
      backgroundColor: '#271c5a',
      color: '#ffffff',
      textDecoration: 'none',
    },
  },
})
