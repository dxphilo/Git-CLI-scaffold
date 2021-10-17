import arg from 'arg';
import chalk from 'chalk';
import {createProject} from '../bin/scafold'

// parsing the terminal arguments into options
function argsToOptions(terminalArgs) {
 const args = arg({
     '--git': Boolean,
     '-g': '--git',
   },{argv: terminalArgs.slice(2),
});
 return {
   git: args['--git'] || false,
   template: args._[0],
 };
}

export async function Util(args) {
 let options = argsToOptions(args);
    console.log(options);
    // options  handling - otherwise pass to create project scafold
    if (!options.template) {
      console.log(chalk.bgMagenta('Please pass some command line arguments !!!'));
    } else {
      await createProject(options);
    }
    
}