
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server'),
    filename: 'index.js',
    assetModuleFilename: 'images/[name][ext][query]'

  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options:{
            publicPath: '/static',

          }
        },  "css-loader", "sass-loader"],
        
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset/resource",
     
      },
    ]
  },
  plugins: [
      new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      inject: 'head',
      base: "/static/"
    }),
    new MiniCssExtractPlugin({
      linkType: 'text/css',
      filename: 'styles.css'
    }),
],
  
};