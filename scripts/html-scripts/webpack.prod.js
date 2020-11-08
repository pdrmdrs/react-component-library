const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       cache: true,
  //       extractComments: 'all',
  //       sourceMap: true,
  //       terserOptions: {
  //         parse: {
  //           ecma: 8,
  //         },
  //         compress: {
  //           ecma: 5,
  //           warnings: false,
  //           comparisons: false,
  //           inline: 2,
  //         },
  //         mangle: {
  //           safari10: true,
  //         },
  //         keep_classnames: false,
  //         keep_fnames: false,
  //         output: {
  //           ecma: 5,
  //           comments: false,
  //           ascii_only: true,
  //         },
  //       },
  //     }),
  //   ],
  //   runtimeChunk: false,
  // },
})
