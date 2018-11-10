'use strict'
var business = require('./business')()

module.exports.register = function (server, options, next) {
  function hello (request, reply) {
    reply('Hello World')
  }
  function getOne (request, reply) {
    reply(business.answerOne())
  }
  function getRevision (request, reply) {
    reply(business.revision())
  }
  server.route({ method: 'GET', path: '/', handler: hello })
  server.route({ method: 'GET', path: '/one', handler: getOne })
  server.route({ method: 'GET', path: '/rev', handler: getRevision })
  next()
}

module.exports.register.attributes = {
  name: 'plugin',
  version: '0.0.1'
}
