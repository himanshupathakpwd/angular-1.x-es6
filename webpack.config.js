const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app/app.module.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    // port: 9000
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      },
      {
        test: /\.m?jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins: [new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
  })],
  devtool: "#inline-source-map"
}
