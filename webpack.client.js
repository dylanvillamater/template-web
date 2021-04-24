const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
entry: './src/index.js',  
output: {
	path: path.join(__dirname,'public'),
	filename:'App.bundle.js',
  assetModuleFilename: 'images/[name][ext][query]'
},
module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
	,
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
      }, 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
      // More information here https://webpack.js.org/guides/asset-modules/
      type: "asset/resource",
      // generator: {
      //   filename: '[hash][ext][query]'
      // }
    },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      inject:'head'
    }),
    new MiniCssExtractPlugin({
      linkType: 'text/css',
      filename: 'styles.css'
    })
  ],
  devServer:{
    contentBase: './public'
  },
  devtool: "source-map"
};

