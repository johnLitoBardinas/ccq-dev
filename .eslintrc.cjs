// .eslintrc.cjs
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],       // need type-aware rules
    tsconfigRootDir: __dirname,
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: { version: 'detect' },
  },
  extends: [
    'airbnb',
    'airbnb-typescript',                 // Airbnb + TS support
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',       // runs Prettier as an ESLint rule
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'prettier',
  ],
  rules: {
    // treat Prettier issues as errors
    'prettier/prettier': 'error',

    // only allow JSX in .tsx
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],

    // TS covers prop types
    'react/prop-types': 'off',

    // allow omitting extensions when importing TS/JS
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never', tsx: 'never', js: 'never', jsx: 'never' },
    ],

    // allow React components as arrow functions
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
  },
  ignorePatterns: ['dist/', 'build/', '.eslintrc.cjs'],
}
