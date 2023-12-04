
Library provides utils for easy require file from project root

[![npm](https://img.shields.io/npm/v/root-require-utils)](https://www.npmjs.com/package/root-require-utils)

## Install

``yarn add root-require-utils``

or 

```npm i -S root-require-utils```


## Usage

```js
const requireUtils = require('root-require-utils')

// resolving path from project root
const path = requireUtils.resolvePath('package.json')
console.log('path', path) // absolute path => .../project/package.json

// require will import file from project root.
if(requireUtils.exists('config-file')) {
  const data = requireUtils.require('config-file')
  console.log('config', data)
}

```
