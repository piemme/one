'use strict'

var test = require('tape-catch')
var build = require('../business')
var business

test('get one (1) from answer', function (t) {
  business = build()
  t.equal(1, business.answerOne())
  t.end()
})

test('get randon number 1-10 ', function (t) {
  business = build()
  t.ok(business.random() >= 1)
  t.ok(business.random() <= 10)
  t.end()
})
