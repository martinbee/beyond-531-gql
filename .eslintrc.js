module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'import/extensions': 0,
    'prettier/prettier': 'error',
    'no-underscore-dangle': 0,
    'no-console': 0,
  },
};
