const shell = require('shelljs');
shell.rm('-f', './main.d.ts');
shell.cat('./**/*.d.ts').to('./main.d.ts');
