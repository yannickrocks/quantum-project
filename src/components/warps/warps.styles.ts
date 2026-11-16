import { stylesheet } from 'typestyle'

export default stylesheet({
  puzzle3__warps__figure: {
    display: 'block',
    width: '100%',
    margin: '0 auto',
    position: 'relative',
    cursor: 'pointer',
    aspectRatio: '1 / 1',
  },
  puzzle3__warps__figure__coord: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
  },
})
