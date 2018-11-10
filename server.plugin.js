'use strict'
var business = require('./business')()

module.exports.register = function (server, options, next) {
  function hello (request, reply) {
    reply('Hello World')
  }
  function getOne (request, reply) {
    reply(business.answerOne())
  }
  function getRandom (request, reply) {
    reply(business.random())
  }
  server.route({ method: 'GET', path: '/', handler: hello })
  server.route({ method: 'GET', path: '/one', handler: getOne })
  server.route({ method: 'GET', path: '/random', handler: getRandom })
  next()
}

module.exports.register.attributes = {
  name: 'plugin',
  version: '0.0.1'
}
