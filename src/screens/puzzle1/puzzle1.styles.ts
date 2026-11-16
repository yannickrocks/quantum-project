import { stylesheet } from 'typestyle'

import {
  coverViewport,
  mobile,
  mobileButton,
  mobilePage,
  mobileTextColumn,
} from '../../styles/breakpoints'

export default stylesheet({
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -100,
    ...coverViewport,
  },
  T2minutes: {
    margin: '0 auto',
    width: '60%',
    $nest: {
      [mobile]: {
        ...mobilePage,
      },
    },
  },
  puzzle1__detailsAndImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    $nest: {
      [mobile]: {
        flexDirection: 'column',
      },
    },
  },
  puzzle1__details: {
    padding: '10px',
    paddingBottom: '40px',
    width: '65%',
    minHeight: '320px',
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    $nest: {
      [mobile]: {
        ...mobileTextColumn,
      },
    },
  },
  puzzle1__details__heading: {
    marginTop: '40px',
    color: '#ff7d25',
    fontSize: '40px',
    fontWeight: 700,
    marginBottom: 0,
    $nest: {
      [mobile]: {
        marginTop: 0,
        fontSize: '32px',
      },
    },
  },
  puzzle1__details_text: {
    textAlign: 'left',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 600,
    $nest: {
      [mobile]: {
        fontSize: '17px',
        lineHeight: 1.5,
      },
    },
  },
  puzzle1__figure: {
    width: '25%',
    marginTop: '40px',
    $nest: {
      [mobile]: {
        width: 'min(60%, 260px)',
        margin: '16px auto 0',
      },
    },
  },
  puzzle1__figure__img: {
    width: '100%',
    $nest: {
      '@media screen and (max-width: 1850px)': {
        marginTop: '60px',
      },
      [mobile]: {
        marginTop: 0,
      },
    },
  },
  T2minutes__ul: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    marginTop: '25px',
    $nest: {
      [mobile]: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '12px',
        listStyle: 'none',
        marginTop: '16px',
      },
    },
  },
  puzzle1__buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    $nest: {
      [mobile]: {
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        marginTop: '8px',
      },
    },
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
    $nest: {
      [mobile]: {
        ...mobileButton,
      },
      '&:hover': {
        backgroundColor: '#8a2c2f',
        color: '#ffffff',
        textDecoration: 'none',
      },
    },
  },
  puzzle1__buttons__proceed: {
    width: '15%',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#33835c',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 800,
    textAlign: 'center',
    height: '35px',
    marginTop: '5px',
    textDecoration: 'none',
    lineHeight: '33px',
    $nest: {
      [mobile]: {
        ...mobileButton,
      },
      '&:hover': {
        backgroundColor: '#1f5c3e',
        color: '#ffffff',
        textDecoration: 'none',
      },
    },
  },
})
