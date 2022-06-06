module.exports = {
  preset: '@acme/jest-preset',
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>',
    '!**/index.ts',
    '!**/index.tsx',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
}
