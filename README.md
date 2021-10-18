<div align="center">
  <h2>GIT CLI Scafold</h2>
  CLI that scaffolds a git project from a template and clones repositories
</div>

---

> #### Prerequisite
>
> - Have NodeJs installed.



#### Built with


Packages.


- [x] arg - CLI argument parser.
- [X] inquirer - A collection of common interactive command line user interfaces.
- [X] ncp - Asynchronous recursive file & directory copying.
- [X] chalk - Add colours to terminal messages and logs.
- [X] figlet -  Creating ASCII Art from text.

#### Installation 

Clone the repo and run the following commands.

```bash

# installs all the packagees and dependencies needed for this project
$ npm install

# Install the CLI globally on your system
$ npm i -g 

```

#### Usage

After installing the CLI globally on your system, you need to call the following commands on your terminal.

## Scaffold new project

```bash

# creates a fresh copy of the project scafold on your currrent working directory
$ scafold new --git

```

## Clone a repo

You can also clone a repo from the CLI.

```bash

# clones the repo provided to your current working directory
$ clone <repo_name>

```





