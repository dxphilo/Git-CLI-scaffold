import chalk from 'chalk';
import fs from 'fs';
import ncp from 'ncp';
import path from 'path';
import { promisify } from 'util';

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options) {
 return copy(options.templateDirectory, options.targetDirectory, {
   clobber: false,
 });
}

export async function createProject(options) {
 options = {
   ...options,
   targetDirectory: options.targetDirectory || process.cwd(),
 };

 const currentFileUrl = import.meta.url;
 const templateDir = path.resolve(
    new URL(currentFileUrl).pathname.substring(new URL(currentFileUrl).pathname.indexOf('/')+1),
    '../../template',
    options.template.toLowerCase()
  );
 options.templateDirectory = templateDir;

 try {
   await access(templateDir, fs.constants.R_OK);
 } catch (err) {
   console.error(chalk.redBright('%s Provided command is incorrect, try using scafold new --git'));
   process.exit(1);
 }

 console.log(chalk.greenBright('Scaffolding the necessary project files'));
 await copyTemplateFiles(options);

 console.log(chalk.greenBright('%s Project was successfullly created', chalk.cyanBright.bold('SUCCESSFUL')));
 return true;
}