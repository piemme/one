'use strict'

function business () {
  const MIN = 1
  const MAX = 10

  return {
    answerOne: answer,
    random: random
  }

  function aComplicatedBusinessLogic () {
    const ONE = 1
    return ONE
  }
  function getRndInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function answer () {
    return aComplicatedBusinessLogic()
  }

  function random () {
    return getRndInteger(MIN, MAX)
  }
}

module.exports = business
