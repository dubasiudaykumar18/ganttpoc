I have followed 
https://github.com/frappe/gantt/issues/105

Getting while running the system 
ERROR TypeError: node_modules_frappe_gantt__WEBPACK_IMPORTED_MODULE_2__.Gantt is not a constructor
    at AppComponent.push../src/app/app.component.ts.AppComponent.ngOnInit (app.component.ts:73)
    at checkAndUpdateDirectiveInline (core.js:22099)
    at checkAndUpdateNodeInline (core.js:23363)
    at checkAndUpdateNode (core.js:23325)
    at debugCheckAndUpdateNode (core.js:23959)
    at debugCheckDirectivesFn (core.js:23919)
    at Object.eval [as updateDirectives] (AppComponent_Host.ngfactory.js? [sm]:1)
    at Object.debugUpdateDirectives [as updateDirectives] (core.js:23911)
    at checkAndUpdateView (core.js:23307)
    at callWithDebugContext (core.js:24177)

# Ganttpoc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
