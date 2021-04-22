const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, ""),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"], // compiles Styl to CSS
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  devServer: { contentBase: path.join(__dirname, "src") },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
