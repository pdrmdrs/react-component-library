#!/usr/bin/env node
const webpack = require('webpack')
const path = require('path')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { merge } = require('webpack-merge')

const devConfig = require('../webpack.dev.js')
const prodConfig = require('../webpack.prod.js')

const argv = yargs(hideBin(process.argv)).argv
const { entry, action } = argv

function showResults(err, stats) {
  if (err) {
    console.log('ERROR', err.stack || err)
    if (err.details) {
      console.log(err.details)
    }
    return
  }

  const info = stats.toJson()

  if (stats.hasErrors()) {
    console.log(info.errors)
  }

  if (stats.hasWarnings()) {
    console.log(info.warnings)
  }

  console.log(
    stats.toString({
      chunks: false,
      colors: true,
    }),
  )
}

function build() {
  const compiler = webpack(prodConfig)
  compiler.run(showResults)
}

function start() {
  const compiler = webpack(devConfig)
  compiler.watch({}, showResults)
}

if (action === 'build') {
  build()
}
if (action === 'start') {
  start()
}
