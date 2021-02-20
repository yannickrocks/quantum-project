import { stylesheet } from 'typestyle';

export default stylesheet({
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -100,
  },
  T2minutes: {
    margin: '0 auto',
    width: '60%',
  },
  puzzle1__detailsAndImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  puzzle1__details: {
    padding: '10px',
    width: '65%',
    height: '350px',
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
  },
  puzzle1__details__heading: {
    marginTop: '40px',
    color: '#ff7d25',
    fontSize: '40px',
    fontWeight: 700,
    marginBottom: 0,
  },
  puzzle1__details_text: {
    textAlign: 'left',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 600,
  },
  puzzle1__figure: {
    width: '25%',
    marginTop: '40px',
  },
  puzzle1__figure__img: {
    width: '100%',
    $nest: {
      '@media screen and (max-width: 1850px)': {
        marginTop: '60px',
      },
    },
  },
  puzzle1__video: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-60px',
  },
  iframe: {
    border: 'none',
  },
  T2minutes__ul: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    marginTop: '25px',
  },
  puzzle1__buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  puzzle1__buttons__reset: {
    width: '15%',
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
  puzzle1__buttons__proceed: {
    width: '15%',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#388861',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 800,
    textAlign: 'center',
    height: '35px',
    marginTop: '5px',
    textDecoration: 'none',
    lineHeight: '33px',
    '&:hover': {
      backgroundColor: '#1f5c3e',
      color: '#ffffff',
      textDecoration: 'none',
    },
  },
});
