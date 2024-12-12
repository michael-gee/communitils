import shell from 'shelljs';

console.log('Removing node_modules...');

shell.rm('-rf', 'site/node_modules');
shell.rm('-rf', 'node_modules');

console.log('Installing dependencies...');
