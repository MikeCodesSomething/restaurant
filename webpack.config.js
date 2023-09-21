const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/fish.png",
      title: "Mike's Mackerel"
  })  
  ]
};