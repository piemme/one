'use strict'

var test = require('tape-catch')
var build = require('../business')
var business

test('get one (1) from answer', function (t) {
  business = build()
  t.equal(1, business.answerOne())
  t.end()
})

test('get revision ', function (t) {
  business = build()
  console.log('REV', business.revision())
  t.equal(41, business.revision().length)
  t.end()
})
