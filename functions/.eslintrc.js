module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "linebreak-style": ["error", "windows"],
    "object-curly-spacing": ["off"],
    "prefer-promise-reject-errors": ["off"],
    "max-len": ["off"],
    camelcase: ["off"],
    indent: ["off"],
    "quote-props": ["off"],
    "comma-dangle": ["off"],
    "space-before-function-parent": ["off"],
    "space-before-function-paren": ["off"],
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
};
