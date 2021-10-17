#! /usr/bin/env node
require = require('esm')(module /*, options*/);
require('../src/clone').Clone(process.argv);
