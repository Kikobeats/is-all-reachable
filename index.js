'use strict'

const isReachable = require('is-reachable')
const {promisify} = require('util')
const nodeify = require('nodeify')
const async = require('async')

const detect = promisify(async.detect)

const isAllReachable = async hosts => {
  const isAllHostsReachables = await detect(hosts, async host => !await isReachable(host))
  return isAllHostsReachables ? [false, isAllHostsReachables] : [true]
}

module.exports = (hosts, cb) =>
  !cb
    ? isAllReachable(hosts)
    : nodeify(isAllReachable(hosts), (err, result) => cb.apply(null, [err].concat(result)))
