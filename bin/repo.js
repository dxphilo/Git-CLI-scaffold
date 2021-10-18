#! /usr/bin/env node
require = require('esm')(module /*, options*/);
require('../src/clone').Clone(process.argv);

const chalk = require('chalk');
const figlet = require('figlet');

if (process.argv){
    console.log(chalk.magentaBright(
        figlet.textSync('Clone Repo !!!', { horizontalLayout: 'full' })));
}

