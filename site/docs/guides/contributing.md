# Contributing

## Phase 1 - Up & Running

Before getting started, it is important to have a basic understanding of how to contribute to open-source. The main question to answer here is: "If I don't have write permissions to this repository, how do I contribute?"

### 1a Create Your Fork

With the assumption that you are new to the project and do not have write permissions to this repository, you will need to make a copy of it which is your own by forking it. This can be done by clicking the "Fork" button in the top right of the repository [homepage](https://github.com/michael-gee/communitils).

Github's official documentation: [Fork a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

### 1b Clone Your Fork

Next simply `git clone` into your local machine using

Github's official documentation: [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

### 1c Install Dependencies

- Confirm you have Node version `20.10.0` and NPM version `10.2.3` installed and active
- `npm ci` from the root directory of the project
- `npm run dev` from the root directory to confirm the project is installed and runs successfully

### 1d Recommendations

IDE: [VS Code](https://code.visualstudio.com/)

Plugins:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)

## Phase 2 - Development

`npm run dev` runs the src/\* vitest test suite in watch mode which enables you to develop and test in parallel.

To add a new util function to the project, simply run `npm run init [myUtil]` with `[myUtil]` being the name of the function you are wanting to create. This will add all the default directory and files you need to get up and running.

❗ IMPORTANT ❗Do **not** edit any `*.d.ts` file - these will be automatically generated or updated for you at build time.

From there it is all code implementation and test coverage - feel free to follow the existing utils as a guide on how to export and test the code. Below is a link to the tool responsible for running both the `npm run dev` & `npm run test` commands:

[Vitest](https://vitest.dev/)

## Phase 3 - Documenting

Make your utility function known to the world! Explain why and how to use it within the `site` directory. It is a simple [Docusaurus](https://docusaurus.io/) markdown site which is deployed via Vercel to [https://www.communitils.com/](https://www.communitils.com/).

Follow this [template](https://github.com/michael-gee/communitils/blob/main/site/docs/template.md) on how to document your function while staying consistent with the rest of the project.

Github's official documentation: [Markdown Reference](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

After code is implemented, tested and documented this will lead to an approval and be considered code complete. Once code complete, it will be merged into `main` and planned for the next npm publish release.

## Phase 4 - Publishing

Before shipping to production, we must first update the [package.json](https://github.com/michael-gee/communitils/blob/main/package.json) version and run `npm i` to make sure the package-lock file also gets the new version.

To publish code to npm and deploy the docs site to production there are 2 Github actions that run every time a `git tag` is pushed to the repository:

- [npm publish](https://github.com/michael-gee/communitils/blob/main/.github/workflows/npm-publish.yml)
- [site deploy](https://github.com/michael-gee/communitils/blob/main/.github/workflows/site-deploy.yml)

The `git tag` and Github release name must match the exact version specified in the `package.json` file prefixed with "v".

Examples: `v0.5.0`, `v1.2.3`, etc...

Github's official documentation: [Managing releases in a repository](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository?tool=webui)
