'use strict'

var test = require('tape-catch')
var build = require('../business')
var business

test('get one (1) from answer', function (t) {
  business = build()
  t.equal(2, business.answerOne())
  t.end()
})
