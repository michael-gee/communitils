const shell = require('shelljs');
shell.cat('src/**/*.d.ts').to('src/main.d.ts');
