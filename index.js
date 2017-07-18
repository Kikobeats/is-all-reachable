'use strict'

const isReachable = require('is-reachable')
const cb2promise = require('cb2promise')
const eachAsync = require('each-async')
const nodeify = require('nodeify')

function isAllRecheable (hosts, cb) {
  eachAsync(hosts, function (host, index, next) {
    nodeify(isReachable(host), function (err, recheable) {
      if (recheable) return next()
      return next(err || {message: 'unrecheable', host: host})
    })
  }, function (err) {
    if (!err) return cb(null, true)
    if (err.message !== 'unrecheable') return cb(err)
    return cb(null, false, err.host)
  })
}

module.exports = (hosts, cb) => (
  cb ? isAllRecheable(hosts, cb) : cb2promise(isAllRecheable, hosts)
)
