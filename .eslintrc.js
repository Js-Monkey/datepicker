module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["plugin:@typescript-eslint/recommended"],
  globals: { _: true },
  rules: {
    "prefer-rest-params": "off",
    semi: [0],
    "no-extra-semi": 2,
  },
}
