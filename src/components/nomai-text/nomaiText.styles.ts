import { stylesheet } from 'typestyle'

import { mobile, mobileTextColumn } from '../../styles/breakpoints'

export default stylesheet({
  nomai__details: {
    padding: '10px',
    width: '55%',
    minHeight: '306px',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '50px',
    paddingBottom: '54px',
    $nest: {
      [mobile]: {
        ...mobileTextColumn,
      },
    },
  },
  nomai__h2: {
    marginTop: '40px',
    color: '#5341ae',
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
  nomai__details__row: {
    display: 'flex',
    flexDirection: 'row',
    $nest: {
      [mobile]: {
        alignItems: 'flex-start',
        gap: '12px',
        lineHeight: 1.5,
        marginTop: '12px',
      },
    },
  },
  nomai__details__img: {
    width: '7%',
    marginBottom: 0,
    marginRight: '10px',
    $nest: {
      [mobile]: {
        width: '48px',
        flex: 'none',
        marginRight: 0,
      },
    },
  },
})
