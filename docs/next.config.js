const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      experimental: {
        esmExternals: true,
      },
      images: {
        loader: "custom",
      }
    }
  }

  return {
    reactStrictMode: true,
    basePath: '/mechanical-ragger',
    assetprefix: '/mechanical-ragger/',
    images: {
      loader: "custom",
    }
  }
}
