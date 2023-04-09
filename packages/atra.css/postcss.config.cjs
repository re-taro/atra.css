const pkg = require('./package.json');

module.exports = (ctx) => ({
  plugins: {
    cssnano: ctx.env === 'production' ? { preset: 'default' } : false,
    'postcss-banner': {
      banner: `${pkg.name} v${pkg.version} | ${pkg.license} License | github.com/re-taro/atra.css`,
      inline: true,
      important: true,
    },
  },
});
