'use strict'

var test = require('tape-catch')
var build = require('../one')
var one

test('simple test', function (t) {
  one = build()
  t.equal(1, one.answerOne())
  t.end()
})