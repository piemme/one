'use strict'

function business () {
  return {
    answerOne: answer,
    random: random
  }

  function aComplicatedBusinessLogic () {
    const ONE = 1
    return ONE
  }

  function answer () {
    return aComplicatedBusinessLogic()
  }

  function random () {
    const MIN = 1
    const MAX = 10
    return Math.floor((Math.random() * MIN) + MAX)
  }
}

module.exports = business
