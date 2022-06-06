/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');

const packages = [];
packages.push(path.join(__dirname, '../../packages'));

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(webpackConfig, loaderByName('babel-loader'));
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(packages);
      }

      return webpackConfig;
    },
  },
  jest: {
    configure: {
      ...require('@acme/jest-preset/jest-preset'),
      collectCoverageFrom: ['src/components/**/*', '!src/*', '!**/index.ts', '!**/index.tsx'],
      moduleNameMapper: {
        ...require('@acme/jest-preset/jest-preset').moduleNameMapper,
        '^@/components/(.*)$': '<rootDir>/components/$1',
      },
    },
  },
};
