const { nodeExternalsPlugin } = require('esbuild-node-externals')
const cssModulesPlugin = require('esbuild-css-modules-plugin')

module.exports = {
  entryPoints: ['index.ts'],
  target: ['esnext'],
  bundle: true,
  loader: {
    '.avif': 'dataurl',
    '.bmp': 'dataurl',
    '.gif': 'dataurl',
    '.jpg': 'dataurl',
    '.jpeg': 'dataurl',
    '.png': 'dataurl',
    '.webp': 'dataurl',
    '.svg': 'dataurl',
  },
  inject: ['./scripts/react-shim.js'],
  plugins: [
    nodeExternalsPlugin(),
    cssModulesPlugin({
      inject: (cssContent, digest) => {
        return `
            (function() {
              if (typeof document !== "undefined" && !document.getElementById(\`${digest}\`)) {
                var el = document.createElement("style");
                el.id = \`${digest}\`;
                el.textContent = \`${cssContent}\`;
                document.head.appendChild(el);
              }
            })();
          `
      },
    }),
  ],
  logLevel: 'info',
}
