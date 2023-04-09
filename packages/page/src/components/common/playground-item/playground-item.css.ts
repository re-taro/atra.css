import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../../styles/global.css';

export const playgroundItem = style({
  selectors: {
    '&:not(:first-child)': {
      marginTop: calc.multiply(vars.spacing, 2),
    },
  },
  '@media': {
    '(max-width: 767px)': {
      width: '100%',
    },
  },
});
