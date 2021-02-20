import { stylesheet } from 'typestyle';

export default stylesheet({
  li: {
    maxWidth: '15%',
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
    '&:focus': {
      outline: 'none',
    },
  },
});
