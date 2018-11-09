'use strict'

function business () {
  return {
    answerOne: answer
  }

  function aComplicatedBusinessLogic () {
    const ONE = 1
    return ONE
  }

  function answer () {
    return aComplicatedBusinessLogic()
  }
}

module.exports = business
