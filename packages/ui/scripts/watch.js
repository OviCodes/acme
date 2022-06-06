/* eslint-disable @typescript-eslint/no-var-requires */
const sharedOptions = require('@acme/esbuild-config/react-library')

require('esbuild')
  .build({
    ...sharedOptions,
    format: 'esm',
    splitting: true,
    outdir: 'dist',
    minify: false,
    sourcemap: false,
    watch: true,
  })
  .catch(() => process.exit(1))

require('esbuild')
  .build({
    ...sharedOptions,
    format: 'cjs',
    outfile: './dist/index.cjs.js',
    minify: false,
    sourcemap: false,
    watch: true,
  })
  .catch(() => process.exit(1))
