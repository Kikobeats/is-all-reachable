'use strict'

const isAllRecheable = require('..')
const should = require('should')

describe('is-all-recheable', function () {
  describe('callback interface', function () {
    it('true', function (done) {
      isAllRecheable([
        'http://google.com',
        'http://google.es'
      ], function (err, isAllRecheable) {
        should(isAllRecheable).be.true()
        done(err)
      })
    })

    it('false', function (done) {
      isAllRecheable([
        'http://aposddasd.com',
        'http://google.com'
      ], function (err, isAllRecheable, host) {
        should(isAllRecheable).be.false()
        should(host).be.equal('http://aposddasd.com')
        done(err)
      })
    })
  })

  describe('promise interface', function () {
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
})
