'use strict'

const code = require('code')
const Lab = require('lab')
const lab = exports.lab = Lab.script({
  output: process.stdout
})
const serverApi = require('../server')

lab.experiment('Integration testing server API', () => {
  let server
  lab.beforeEach((done) => {
    serverApi({ port: 8989 }, (err, s) => {
      server = s
      done(err)
    })
  })
  lab.test('Api: testing for "Hello World"', (done) => {
    const options = { method: 'GET', url: '/' }
    server.inject(options, function (response) {
      const result = response.result
      code.expect(result).to.equal('Hello World')
      done()
    })
  })
  lab.test('Api: testing for One (1)', (done) => {
    const options = { method: 'GET', url: '/one' }
    server.inject(options, function (response) {
      const result = response.result
      code.expect(result).to.equal(1)
      done()
    })
  })
})
