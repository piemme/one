'use strict'
var business = require('./business')()

module.exports.register = function (server, options, next) {
  function hello (request, reply) {
    reply('Hello World')
  }
  function getOne (request, reply) {
    reply(business.answerOne())
  }
  server.route({ method: 'GET', path: '/', handler: hello })
  server.route({ method: 'GET', path: '/one', handler: getOne })
  next()
}

module.exports.register.attributes = {
  name: 'plugin',
  version: '0.0.1'
}
