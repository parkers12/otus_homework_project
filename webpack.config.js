const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
    environment: {
      arrowFunction: false,
    },
    assetModuleFilename: "fonts/futura/[name][ext]",
  },
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/styles.css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/fonts", to: "fonts" },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    "autoprefixer",
                    "cssmqpacker",
                    "cssnano",
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(eot|ttf|woff)$/,
        type: "asset/fonts",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", "tsx"],
  },
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
  },
};