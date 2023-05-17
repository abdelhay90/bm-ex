const path = require('path');

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    // 'airbnb',
    // 'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-uses-react': ['off'],
    'react/jsx-props-no-spreading': ['warn'],
    'react/no-unescaped-entities': ['off'],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],

    'class-methods-use-this': ['off'],
    'react/function-component-definition': ['off'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: [path.resolve(__dirname, 'src')],
      },
    },
  },
};
