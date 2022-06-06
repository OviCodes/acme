const { nodeExternalsPlugin } = require('esbuild-node-externals')

module.exports = {
  entryPoints: ['index.ts'],
  target: ['esnext'],
  bundle: true,
  plugins: [nodeExternalsPlugin()],
  logLevel: 'info',
}
