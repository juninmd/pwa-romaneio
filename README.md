```markdown
# pwa-romaneio

**A standard software project.**

**Installation:**

1.  Clone the repository: `git clone https://github.com/your-username/pwa-romaneio.git`
2.  Navigate to the project directory: `cd pwa-romaneio`
3.  Install dependencies: `npm install`
4.  Run the dev server: `npm run ionic:serve`

**Usage:**

*   **Development:**
    *   `npm run ionic:serve`: Serves the application in the browser for development.
    *   `npm run build` (or `npm run ionic:build`): Builds the application for deployment into `www/`.
*   **Quality:**
    *   `npm run lint`: Runs the TSLint checks defined in `tslint.json`.
    *   There is no automated test suite yet; `npm test` is not defined.
*   **Deployment:** Not scripted. Publish the output of `npm run build` to your hosting of choice.

**Note:** The build toolchain uses `node-sass` 4.x, which only runs on older Node.js versions.
If `npm run build` or `npm run lint` fail with a "Node Sass does not yet support your current environment" error,
use an older LTS Node.js release (for example, Node 8 or 10).

**Files:**

*   `.editorconfig`: Configuration for code style and linting.
*   `.gitignore`: Specifies files to ignore in Git.
*   ionic.config.json: Configuration for the Ionic framework.
*   package.json: Contains project metadata, dependencies, and scripts.
*   src: Contains the main application source code.
*   tsconfig.json: TypeScript compiler configuration.
*   tslint.json: Linting rules and settings.
```