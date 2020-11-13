const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  entry: path.resolve(process.cwd(), 'src', 'index.tsx'),
  output: {
    filename: 'index.js',
    path: path.resolve(process.cwd(), 'dist'),
    libraryTarget: 'umd',
  },
  plugins: [new CleanWebpackPlugin()],
}
