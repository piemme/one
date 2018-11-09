'use strict'

function business () {
  return {
    answerOne: answer
  }

  function privateStuff () {
    var stuff
    return stuff
  }

  function answer () {
    privateStuff()
    return 1
  }
}

module.exports = business
