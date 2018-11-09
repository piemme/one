'use strict'

const code = require('code')
const Lab = require('lab')
const lab = exports.lab = Lab.script({
  output: process.stdout
})
const oneApi = require('./server')

lab.experiment('Integration testing server oneApi', () => {
  let server
  lab.beforeEach((done) => {
    oneApi({ port: 8989 }, (err, s) => {
      server = s
      done(err)
    })
  })
  lab.test('Testing for "Hello World"', (done) => {
    const options = { method: 'GET', url: '/' }
    server.inject(options, function (response) {
      const result = response.result
      code.expect(result).to.equal('Hello World')
      done()
    })
  })
  lab.test('Testing for One (1)', (done) => {
    const options = { method: 'GET', url: '/one' }
    server.inject(options, function (response) {
      const result = response.result
      code.expect(result).to.equal('1')
      done()
    })
  })
})
