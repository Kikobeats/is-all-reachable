'use strict'

var isAllRecheable = require('..')

describe('is-all-recheable', function () {
  it('true', function (done) {
    isAllRecheable([
      'http://google.com',
      'http://google.es'
    ], function (err, isAllRecheable) {
      isAllRecheable.should.be.true()
      done(err)
    })
  })

  it('false', function (done) {
    isAllRecheable([
      'http://aposddasd.com',
      'http://google.com'
    ], function (err, isAllRecheable, host) {
      isAllRecheable.should.be.false()
      host.should.be.equal('http://aposddasd.com')
      done(err)
    })
  })
})
