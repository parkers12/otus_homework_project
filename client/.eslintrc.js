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
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["jest", "@babel", "react"],
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
