#! /usr/bin/env node

'use strict'

const Hapi = require('hapi')
const xtend = require('xtend')
const minimist = require('minimist')
const plugin = require('./server.plugin')
var debug = require('debug')('server')
const defaults = {
  port: 8989
}

function oneApi (opts, cb) {
  debug('oneApi')
  opts = xtend(defaults, opts)
  const server = new Hapi.Server()
  server.connection({ port: opts.port })
  server.register([plugin], (err) => {
    cb(err, server)
  })
  return server
}

function start (opts) {
  oneApi(opts, (err, server) => {
    if (err) { throw err }
    server.start(function (err) {
      if (err) { throw err }
      debug('Server running at:', server.info.uri)
    })
  })
}

module.exports = oneApi

if (require.main === module) {
  start(minimist(process.argv.slice(2), {
    integer: 'port'
  }))
}
