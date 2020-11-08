const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.native.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(process.cwd(), 'html-dist'),
    libraryTarget: 'umd',
  },
  plugins: [new CleanWebpackPlugin()],
  // optimization: {
  //   // splitChunks: {
  //   //   chunks: 'all',
  //   // },
  //   runtimeChunk: false,
  // },
}
