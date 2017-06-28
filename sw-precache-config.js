module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.bundle.js',
    'dist/**.bundle.css',
    'dist/assets/**',
    'dist/manifest.json',
    'dist/sw-registration.js'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /timeline/,
    handler: 'networkFirst'
  },
  {
    urlPattern: /fonts\.googleapis\.com/,
    handler: 'cacheFirst'
  },
  {
    urlPattern: /fonts\.gstatic\.com/,
    handler: 'cacheFirst'
  },
  {
    urlPattern: /pbs\.twimg\.com/,
    handler: 'cacheFirst'
  }],
  importScripts: ['/sw.js']
};
