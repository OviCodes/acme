/* eslint-disable @typescript-eslint/no-var-requires */
const sharedOptions = require('@acme/esbuild-config/react-library')

require('esbuild')
  .build({
    ...sharedOptions,
    format: 'esm',
    splitting: true,
    outdir: 'dist',
    minify: true,
    sourcemap: true,
  })
  .catch(() => process.exit(1))

require('esbuild')
  .build({
    ...sharedOptions,
    format: 'cjs',
    outfile: './dist/index.cjs.js',
    minify: true,
    sourcemap: true,
  })
  .catch(() => process.exit(1))
