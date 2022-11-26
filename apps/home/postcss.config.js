// apps/site/postcss.config.js
const { join } = require('path');

module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
          grid: 'autoplace'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      }
    ],
    [
      'tailwindcss',
      {
        config: join(__dirname, 'tailwind.config.js')
      }
    ]
  ]
};
