'use strict'

const isReachable = require('is-reachable')
const {promisify} = require('util')
const async = require('async')

const detect = promisify(async.detect)

module.exports = async hosts => {
  const isAllHostsReachables = await detect(hosts, async host => {
    const isHostReachable = await isReachable(host)
    return !isHostReachable
  })

  return isAllHostsReachables
    ? [false, isAllHostsReachables]
    : [true]
}
