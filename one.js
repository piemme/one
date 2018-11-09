'use strict'

function one () {

  var internal

  return {
    answer: answer
  }

  function privateStuff () {
    var stuff
    return stuff
  }

  function answer () {
    internal
    privateStuff()
    return 1
  }
}

module.exports = one
