import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../../styles/global.css';

export const contentListItem = style({
  selectors: {
    '&:not(:first-child)': {
      marginLeft: calc.multiply(vars.spacing, 1.5),
    },
  },
  '@media': {
    '(max-width: 767px)': {
      width: '100%',
      selectors: {
        '&:not(:first-child)': {
          marginTop: calc.multiply(vars.spacing, 1.5),
          marginLeft: 0,
        },
      },
    },
  },
});
