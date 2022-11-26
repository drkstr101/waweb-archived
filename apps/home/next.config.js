const analyzer = require('@next/bundle-analyzer');
const withNx = require('@nrwl/next/plugins/with-nx');
// const withPreact = require('next-plugin-preact');
const withPWA = require('next-pwa');
const transpiler = require('next-transpile-modules');
const sourcebit = require('sourcebit');

const sourcebitConfig = require('../../sourcebit.js');
sourcebit.fetch(sourcebitConfig);

const withBundleAnalyzer = analyzer({
  enabled: process.env['ANALYZE'] === 'true'
});

const withTM = transpiler([
  '@adobe/react-spectrum',
  '@react-spectrum/actiongroup',
  '@react-spectrum/breadcrumbs',
  '@react-spectrum/button',
  '@react-spectrum/buttongroup',
  '@react-spectrum/calendar',
  '@react-spectrum/checkbox',
  '@react-spectrum/combobox',
  '@react-spectrum/contextualhelp',
  '@react-spectrum/datepicker',
  '@react-spectrum/dialog',
  '@react-spectrum/divider',
  '@react-spectrum/form',
  '@react-spectrum/icon',
  '@react-spectrum/illustratedmessage',
  '@react-spectrum/image',
  '@react-spectrum/label',
  '@react-spectrum/layout',
  '@react-spectrum/link',
  '@react-spectrum/listbox',
  '@react-spectrum/menu',
  '@react-spectrum/meter',
  '@react-spectrum/numberfield',
  '@react-spectrum/overlays',
  '@react-spectrum/picker',
  '@react-spectrum/progress',
  '@react-spectrum/provider',
  '@react-spectrum/radio',
  '@react-spectrum/searchfield',
  '@react-spectrum/slider',
  '@react-spectrum/statuslight',
  '@react-spectrum/switch',
  '@react-spectrum/table',
  '@react-spectrum/tabs',
  '@react-spectrum/text',
  '@react-spectrum/textfield',
  '@react-spectrum/theme-dark',
  '@react-spectrum/theme-default',
  '@react-spectrum/theme-light',
  '@react-spectrum/tooltip',
  '@react-spectrum/view',
  '@react-spectrum/well',
  '@spectrum-icons/ui',
  '@spectrum-icons/workflow',
  'react-syntax-highlighter'
]);

const GATEKEEPER_URL = process.env['GATEKEEPER_URL'] ?? 'http://localhost:4200';

/**
 * @type {WithNxOptions}
 **/
const nextConfig = {
  // Prefer loading of ES Modules over CommonJS
  experimental: {
    // concurrentFeatures: true,
    esmExternals: true
  },
  // minify output
  swcMinify: true,
  // webpack,
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  env: { GATEKEEPER_URL },
  images: {
    domains: [
      'watheia.com',
      'www.datocms-assets.com',
      'images.unsplash.com',
      'localhost' // For Strapi
    ],
    imageSizes: [24, 64, 300]
  },
  pwa: {
    disable: process.env['NODE_ENV'] === 'development',
    sw: `sw.js`,
    cacheOnFrontEndNav: true // warning: may cause additional network request
  }
};

// note: withTM didn't seem to work with `next-compose-plugins`,
//       so we must compose them manually here using withTM as
//       the outermost call
module.exports = withTM(withNx(withBundleAnalyzer(withPWA(nextConfig))));
