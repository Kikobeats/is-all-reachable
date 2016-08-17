'use strict'

var isReachable = require('is-reachable')
var eachAsync = require('each-async')

function isAllRecheable (hosts, cb) {
  eachAsync(hosts, function checkAvability (host, index, next) {
    isReachable(host, function (err, recheable) {
      if (recheable) return next()
      return next(err || {message: 'unrecheable', host: host})
    })
  }, function (err) {
    if (!err) return cb(null, true)
    if (err.message !== 'unrecheable') return cb(err)
    return cb(null, false, err.host)
  })
}

module.exports = isAllRecheable
