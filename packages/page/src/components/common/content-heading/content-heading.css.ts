import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../../styles/global.css';

export const contentHeading = style({
  marginBottom: calc.multiply(vars.spacing, 2),
  color: vars.color['accent-7'],
  fontFamily: vars.font,
  fontSize: '1.6rem',
  fontWeight: 600,
});
