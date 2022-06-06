module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
    node: true,
    browser: true,
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'jsx-a11y', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
