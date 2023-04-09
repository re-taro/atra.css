import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../../styles/global.css';

export const footer = style({
  padding: `${calc.multiply(vars.spacing, 5)} 0`,
  color: vars.color['accent-5'],
  textAlign: 'center',
});

export const inner = style({
  selectors: {
    [`${footer} &`]: {
      color: vars.color['accent-8'],
    },
  },
});
