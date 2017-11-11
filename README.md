# is-all-reachable

![Last version](https://img.shields.io/github/tag/Kikobeats/is-all-reachable.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/is-all-reachable/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/is-all-reachable)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/is-all-reachable.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/is-all-reachable)
[![Dependency status](https://img.shields.io/david/Kikobeats/is-all-reachable.svg?style=flat-square)](https://david-dm.org/Kikobeats/is-all-reachable)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/is-all-reachable.svg?style=flat-square)](https://david-dm.org/Kikobeats/is-all-reachable#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/is-all-reachable.svg?style=flat-square)](https://www.npmjs.org/package/is-all-reachable)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Check if a list of hosts servers are all recheable.

## Install

```bash
$ npm install is-all-reachable --save
```

## Usage

```js
const isAllReachable = require('is-all-reachable')

isAllReachable([
  'http://google.com',
  'http://google.es'
], (err, reachable) => {
  console.log(reachable); //=> true
});

isReachable([
  'http://aposddasd.com',
  'http://google.com'
], (err, reachable, host) => {
  console.log(reachable); //=> false
  console.log(host); //=> 'http://aposddasd.com'

});
```

## API

### isAllReachable(hosts, callback)

#### hosts

*Required*
Type: `array`

A list of [hosts](https://nodejs.org/api/url.html) to check.

#### callback(error, reachable, host)

Type: `function`

`error` is there only by Node.js convention and is always `null`.

##### reachable

Type: `boolean`

Is `true` if *all* of the `hosts` are reachable.

##### host

Type: `string`

First unrecheable `host` found.

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).
