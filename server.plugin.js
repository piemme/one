'use strict'
var one = require('./one')()

module.exports.register = function (server, options, next) {
  function hello (request, reply) {
    reply('Hello World')
  }
  function getOne (request, reply) {
    reply(one.answerOne())
  }
  server.route({ method: 'GET', path: '/', handler: hello })
  server.route({ method: 'GET', path: '/one', handler: getOne })
  next()
}

module.exports.register.attributes = {
  name: 'plugin',
  version: '0.0.1'
}
