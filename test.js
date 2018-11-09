'use strict'

var test = require('tape-catch')
var build = require('./')
var one

test('simple test', function (t) {
  one = build()
  t.equal(42, one.answer())
  t.end()
})

