import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../styles/global.css';

export const inner = style({
  display: 'grid',
  gap: calc.multiply(vars.spacing, 2),
  placeItems: 'center',
});

export const main = style({
  color: vars.color['accent-7'],
  fontFamily: vars.font,
  fontSize: '1.5rem',
  fontWeight: 700,
});

export const sub = style({
  color: vars.color['accent-7'],
  fontFamily: vars.font,
  fontSize: '0.875rem',
});

export { sectionContainer } from '../top/top.css';
