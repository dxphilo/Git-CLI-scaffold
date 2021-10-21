import arg from 'arg';
import chalk from 'chalk';
import { stderr } from 'process';
const {exec}=require('child_process');

// 
export async function Clone(arg) {
    // console.log(arg[2])
    if (arg[2]) {
        exec(`git clone ${arg[2]}`,(error,stdout,stderr)=>{
            if (error) {
                console.log(chalk.cyanBright(error));
            }

        })
        
    }else{
        console.log(chalk.cyanBright('Please pass the repository as an argument to clone'));
    }

}
