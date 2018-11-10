'use strict'

function business () {
  return {
    answerOne: answer,
    revision: revision
  }

  function aComplicatedBusinessLogic () {
    const ONE = 1
    return ONE
  }

  function answer () {
    return aComplicatedBusinessLogic()
  }

  function revision () {
    return require('child_process').execSync('git rev-parse HEAD').toString()
  }
}

module.exports = business
