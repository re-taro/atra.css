import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../../styles/global.css';

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: calc.multiply(vars.spacing, 40),
  minHeight: '100vh',
  marginBottom: calc.multiply(vars.spacing, 10),
  fontFamily: vars.font,
});

export const headerHeading = style({
  color: vars.color['accent-7'],
  fontSize: '3rem',
  fontWeight: 800,
});

export const headerSub = style({
  marginTop: calc.multiply(vars.spacing, 2),
  color: vars.color['accent-5'],
});

export const headerGuide = style({
  display: 'flex',
  marginTop: calc.multiply(vars.spacing, 6),
});

export const headerGuideItem = style({
  selectors: {
    '&:not(:first-child)': {
      marginLeft: calc.multiply(vars.spacing, 1.5),
    },
  },
});

export const headerGuideButton = style({
  display: 'block',
  padding: '0.75rem 1.5rem',
  transition: 'background-color 0.2s ease',
  borderRadius: '4px',
  backgroundColor: vars.color['accent-5'],
  color: '#fff',
  fontSize: '1rem',
  letterSpacing: '0.025em',
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color['accent-6'],
    },
  },
});

export const headerGuideButtonGitHub = style({
  display: 'block',
  padding: '0.75rem 1.5rem',
  transition: 'background-color 0.2s ease',
  borderRadius: '4px',
  backgroundColor: vars.color['accent-6'],
  color: '#fff',
  fontSize: '1rem',
  letterSpacing: '0.025em',
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color['accent-8'],
    },
  },
});
