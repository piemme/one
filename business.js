'use strict'

const fs = require('fs')

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
    return fs.readFileSync('.git/refs/heads/master', 'utf8')
  }
}

module.exports = business
