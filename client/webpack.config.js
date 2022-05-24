const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "./js/bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
    environment: {
      arrowFunction: false,
    },
    // assetModuleFilename: "fonts/futura/[name][ext]",
  },
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "./styles/styles.css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/icons", to: "icons" },
        { from: "src/assets/fonts", to: "fonts" }
      ],
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, "build/**/*")],
    }),
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
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack', 'file-loader']
      },
      {
        test: /\.(jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(eot|ttf|woff)$/,
        type: "asset/fonts",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/api': '' }
      },
    }
  },
};
