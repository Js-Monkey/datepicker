module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  globals: {_: true},
  rules: {
    'prefer-rest-params': 'off',
    'no-extra-semi': 'off'
  }
}
