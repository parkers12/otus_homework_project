module.exports = {
    env: {
      browser: true,
      es2021: true,
      "jest/globals": true,
    },
    extends: ["airbnb-base", "prettier"],
    plugins: ["jest"],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      allowImportExportEverywhere: false,
      codeFrame: true
    },
    parser: "babel-eslint",
    rules: {
      strict: 0,
      "max-len": [
        "error",
        {
          ignoreComments: true,
        },
      ],
      "no-console": "off",
      "no-alert": "off",
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    },
  };