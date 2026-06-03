# Perso

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## GitHub Pages

To publish the Angular app on `https://dbuhon.github.io/my-resume/`, build the site into `docs/` with the repository base path:

```bash
npm run build:pages
```

The repository now includes a GitHub Actions workflow that builds and deploys the app for GitHub Pages. In the GitHub repository settings, set Pages to deploy from **GitHub Actions**.

After that, every push to `master` will deploy the Angular app to `https://dbuhon.github.io/my-resume/`.

Why this is needed:

- GitHub Pages only serves static files from the configured publish source.
- This Angular app normally builds into `dist/`, which GitHub Pages does not publish by default.
- The `build:pages` script emits an `index.html` into `docs/` and sets the Angular base href to `/my-resume/`, so JS and asset URLs resolve correctly on the project page.

### Local build note

The current Angular 5 toolchain uses an old `node-sass` version that does not build cleanly on modern Apple Silicon Node environments. If you want to run the production build locally, use the pinned Node version from `.node-version` in a compatible x64 environment, or let GitHub Actions handle the Pages build and deployment.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
