#! /usr/bin/env node
require = require('esm')(module /*, options*/);
require('../src/utils').Util(process.argv);
const chalk = require('chalk');
const figlet = require('figlet');

if (process.argv){
    console.log(chalk.magentaBright(
        figlet.textSync('Git Scafold !!!', { horizontalLayout: 'full' })));
}
