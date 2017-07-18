'use strict'

const isAllRecheable = require('..')
const should = require('should')

describe('is-all-recheable', function () {
  it('true', async function () {
    const [result] = await isAllRecheable([
      'http://google.com',
      'http://google.es'
    ])
    should(result).be.true()
  })

  it('false', async function () {
    const [result, host] = await isAllRecheable([
      'http://aposddasd.com',
      'http://google.com'
    ])

    should(result).be.false()
    should(host).be.equal('http://aposddasd.com')
  })
})
