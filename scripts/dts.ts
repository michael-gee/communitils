import shell from 'shelljs';
shell.rm('-f', '../src/main.d.ts');
shell.rm('-rf', 'dist');
shell.cat('../src/**/*.d.ts').to('../src/main.d.ts');
