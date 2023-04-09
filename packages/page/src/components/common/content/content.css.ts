import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../../styles/global.css';

export const contentSubHeading = style({
  marginBottom: calc.multiply(vars.spacing, 1.8),
  color: vars.color['accent-6'],
  fontFamily: vars.font,
  fontSize: '1.4rem',
});
