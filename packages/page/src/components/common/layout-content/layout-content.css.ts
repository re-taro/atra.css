import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../../styles/global.css';

export const content = style({
  marginBottom: calc.multiply(vars.spacing, 6),
});
