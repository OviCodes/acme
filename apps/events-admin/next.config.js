/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */
const nextConfig = {
  reactStrictMode: true,
  // allow importing files from outside of root directory (eg. from a different Yarn workspace)
  experimental: {
    externalDir: true,
  },
  // disable NextJS static image loaders in favour of the next-images package
  images: {
    disableStaticImages: true,
  },
}

const nextImagesConfig = {
  // disable inlining images
  inlineImageLimit: false,
}

// https://www.npmjs.com/package/next-transpile-modules
// used to make CSS Modules work
const withTM = require('next-transpile-modules')(['@acme/ui'])

// https://github.com/twopluszero/next-images
// used to make image imports compatible with CRA
const withImages = require('next-images')

module.exports = withTM(withImages({ ...nextConfig, ...nextImagesConfig }))
