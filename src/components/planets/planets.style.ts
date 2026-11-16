import { stylesheet } from 'typestyle'

import { focusRing, mobile } from '../../styles/breakpoints'

export default stylesheet({
  li: {
    maxWidth: '15%',
    $nest: {
      [mobile]: {
        maxWidth: 'none',
        width: 'calc((100% - 24px) / 3)',
      },
    },
  },
  puzzle1__planets__figure: {
    width: '80%',
    margin: '0 auto',
  },
  puzzle1__planets__img: {
    width: '100%',
  },
  puzzle1__planets__input: {
    borderRadius: '6px',
    border: 'none',
    textAlign: 'center',
    width: '100%',
    height: '35px',
    $nest: {
      [mobile]: {
        height: '48px',
        fontSize: '16px',
        boxSizing: 'border-box',
      },
      '&:focus-visible': focusRing,
    },
  },
})
