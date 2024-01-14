const shell = require('shelljs');
shell.rm('-rf', '../dist');
shell.rm('-rf', '../site/build');
shell.rm('-rf', '../site/.docusaurus');
