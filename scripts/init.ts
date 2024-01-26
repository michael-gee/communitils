import shell from 'shelljs';

const utilName = process.argv[2];

if (typeof utilName === 'undefined') {
  throw new Error(
    'Error: No name provided. Please provide the name of the function you want to create when running npm run init, for example: "npm run init myUtil"\n'
  );
}

if (shell.test('-d', `src/${utilName}`)) {
  throw new Error('Error: Function already exists. Please provide a unique name for your function.\n');
}

shell.mkdir('-p', `src/${utilName}`);
shell.touch(`src/${utilName}/index.ts`);
shell.touch(`src/${utilName}/${utilName}.ts`);
shell.touch(`src/${utilName}/${utilName}.test.ts`);

shell.echo(`export * from './${utilName}';`).toEnd(`src/main.ts`);
shell.ShellString(`export * from './${utilName}';`).to(`src/${utilName}/index.ts`);
shell.ShellString(`export function ${utilName}() {};`).to(`src/${utilName}/${utilName}.ts`);
shell.ShellString(`// ~ TODO: add tests here`).to(`src/${utilName}/${utilName}.test.ts`);
