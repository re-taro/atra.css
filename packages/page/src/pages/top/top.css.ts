import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../styles/global.css';

export const sectionHeading = style({
  marginBottom: calc.multiply(vars.spacing, 4),
  color: vars.color['accent-7'],
  fontFamily: vars.font,
  fontSize: '2rem',
  fontWeight: 600,
  textAlign: 'center',
});

export const sectionContainer = style({
  marginBottom: calc.multiply(vars.spacing, 15),
});

export const installContentPerformatted = style({
  padding: '1rem 1.5rem',
  overflow: 'auto',
  borderRadius: '6px',
  backgroundColor: vars.color['accent-2'],
  fontSize: '1rem',
  lineHeight: 1.45,
  userSelect: 'all',
});

export { contentHeading } from '../../components/common/content-heading/content-heading.css';
