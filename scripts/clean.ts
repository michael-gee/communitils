import shell from 'shelljs';

shell.rm('-rf', 'dist');
shell.rm('-rf', 'site/build');
shell.rm('-rf', 'site/.docusaurus');
