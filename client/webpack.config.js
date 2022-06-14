const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
    environment: {
      arrowFunction: false,
    },
    // assetModuleFilename: "fonts/comfortaa/[name][ext]",
  },
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Development',
        template: path.join(__dirname, "public/index.html"),
        publicPath: '/',
      }),
    new MiniCssExtractPlugin({
      filename: "styles/styles.css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets/images/icons",
          to: "images/icons"
        },
        {
          from: "src/assets/images/catalog",
          to: "images/catalog"
        },
        {
          from: "src/assets/images/slider",
          to: "images/slider"
        },
        {
          from: "src/assets/images/categories",
          to: "images/categories"
        },
        {
          from: "src/assets/images/recources",
          to: "images/recources"
        },
        {
          from: "src/assets/fonts",
          to: "fonts"
        },
      ],
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, "build/**/*")],
    }),
  ],
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
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
        test: /\.svg/,
        type: "asset/resource",
        generator: {
          filename: "images/icons/[name][ext]"
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/img/[name][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/comfortaa/[name][ext][query]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  stats: {
    children: true,
  },
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
      },
    },
  },
};