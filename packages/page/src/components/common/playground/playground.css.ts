import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../../styles/global.css';

export const playground = style({
  marginBottom: calc.multiply(vars.spacing, 3),
  padding: '1.5rem',
  border: `1px solid ${vars.color['accent-2']}`,
  borderRadius: calc.multiply(vars.spacing, 0.5),
});
