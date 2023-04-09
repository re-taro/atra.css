import { createGlobalTheme, createGlobalThemeContract, globalStyle } from '@vanilla-extract/css';

export const vars = createGlobalThemeContract({
  spacing: 'spacing',
  font: 'inter',
  color: {
    'accent-1': 'accent-1',
    'accent-2': 'accent-2',
    'accent-3': 'accent-3',
    'accent-4': 'accent-4',
    'accent-5': 'accent-5',
    'accent-6': 'accent-6',
    'accent-7': 'accent-7',
    'accent-8': 'accent-8',
  },
});

createGlobalTheme(':root', vars, {
  spacing: '0.5rem',
  font: 'Inter, sans-serif',
  color: {
    'accent-1': '#fafafa',
    'accent-2': '#eaeaea',
    'accent-3': '#999',
    'accent-4': '#888',
    'accent-5': '#666',
    'accent-6': '#444',
    'accent-7': '#333',
    'accent-8': '#111',
  },
});

globalStyle('[id]', {
  scrollMarginTop: '2ex',
});
