# UBC Kendo Club — Web Frontend

The official web application for the University of British Columbia Kendo Club (Est. 1978). Built with React, Vite, and React Router, and deployed via Vercel.

## Setup

### Package installation

The following command installs all required dependencies listed in the
`package.json` file:

```
npm install
```

Once the installation is complete, you should see a `node_modules` directory
in the project's root. This directory contains all installed packages.

When installing a new package to the website, please follow the steps below:

1. Run the command `npm install <package-name>`.
   Replace `<package-name>` with the actual name of the package you want to add.

   - Should you encounter errors related to resolving peer dependencies,
     please re-run the command with the header `--legacy-peer-deps`. Do not
     to use `--force` unless you're well aware of the potential consequences.

2. Review the `package.json` file to ensure the new package and its version
   have been added to the dependencies section.
   - Confirm that `package-lock.json` has also been updated.
     This file holds specific version information to ensure consistent
     installations across different environments.
3. Once the installation process is finished, please make sure to commit the
   files `package.json` and `package-lock.json`. These files are essential for
   version controlling the dependencies that have been added.

## Run

You can run the website in development mode by executing the following command:

```bash
npm run dev
```

## Linters

Before merging in new changes to the repository, please execute the following
commands in order:

```bash
npm run format
```

This command runs [Prettier](https://prettier.io/docs/en/index.html) to
automatically format the code according to the rules defined in the
configuration file `.prettierrc`.

```bash
npm run lint
```

This command runs [ESLint](https://eslint.org/docs/latest/use/getting-started)
to analyze the code for potential errors.

## Updating Content

Core site content is centralized in `src/data/kendoData.js`, allowing non-technical executives to update site information without modifying component code.

<!-- * **Tournament bracket:** Set `TOURNAMENT_INFO.isActive` to `true` and update `bracketUrl`. -->
* **Practice schedule and locations:** Modify the `PRACTICE_SCHEDULE` and `LOCATIONS` arrays.
* **Executives and instructors:** Edit the `EXEC_TEAM` and `INSTRUCTORS` arrays.
