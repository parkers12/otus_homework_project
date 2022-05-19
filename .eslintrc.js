module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb-base",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  plugins: ["jest", "react"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: "@babel/eslint-parser",
  rules: {
    strict: 0,
    "max-len": [
      "error",
      {
        ignoreComments: true,
      },
    ],
    "react/no-set-state": "off",
    "no-console": "off",
    "no-alert": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
  },
};
