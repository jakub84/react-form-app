'use strict';

module.exports = {
  root: true,

  extends: [
    'react-app',
    'airbnb',
  ],

  parser: 'babel-eslint',

  plugins: ['import', 'jsx-a11y', 'react'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    "linebreak-style": 0,
    'react/prop-types': ['off'],
    'import/prefer-default-export': ['off'],
    'react/no-array-index-key': ['warn'],
    'react/no-unescaped-entities': ['warn'],
    'react/jsx-filename-extension': ['off'],
  }
};
