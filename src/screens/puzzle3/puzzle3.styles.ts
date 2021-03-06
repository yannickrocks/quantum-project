import { stylesheet } from 'typestyle'

export default stylesheet({
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -100,
  },
  finalVoyage: {
    margin: '0 auto',
    width: '65%',
  },
  puzzle3__detailsAndImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  puzzle3__details: {
    padding: '10px',
    width: '55%',
    height: '350px',
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
  },
  puzzle3__details__h2: {
    marginTop: '40px',
    color: '#b75053',
    fontSize: '40px',
    fontWeight: 700,
    marginBottom: '15px',
  },
  puzzle3__details__p: {
    textAlign: 'left',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 600,
  },
  puzzle3__figure: {
    width: '20%',
    margin: 0,
  },
  puzzle3__figure__img: {
    width: '100%',
    marginTop: '70px',
  },
  finalVoyage__ul: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '0 auto',
    marginLeft: '60px',
  },
  finalVoyage__li: {
    width: '185px',
    position: 'relative',
  },
  puzzle3__warps__figure__back: {
    width: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  puzzle3__launch__figure: {
    width: '30%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  puzzle3__launch__figure__img: {
    width: '100%',
    marginTop: '-18px',
  },
  puzzle3__details__warning: {
    textAlign: 'center',
    color: '#D6D6D6',
    fontWeight: 900,
  },

  puzzle3__buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '20px',
    margin: '0 auto',
  },
  puzzle3__buttons__reset: {
    width: '140px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#b75053',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 800,
    textAlign: 'center',
    height: '35px',
    marginTop: '5px',
    '&:hover': {
      backgroundColor: '#8a2c2f',
      color: '#ffffff',
      textDecoration: 'none',
    },
  },
})
