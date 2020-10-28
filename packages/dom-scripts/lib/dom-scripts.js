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

function includeEntry(config) {
  return merge(config, {
    entry: path.resolve(entry),
  })
}

function showResults(err, stats) {
  if (err) {
    console.error(err.stack || err)
    if (err.details) {
      console.error(err.details)
    }
    return
  }

  const info = stats.toJson()

  if (stats.hasErrors()) {
    console.error(info.errors)
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings)
  }

  console.log(
    stats.toString({
      chunks: false,
      colors: true,
    }),
  )
}

function build() {
  webpack(includeEntry(prodConfig), showResults)
}

function start() {
  webpack(includeEntry(devConfig), showResults).watch()
}

if (action === 'build') {
  build()
}
if (action === 'start') {
  start()
}
