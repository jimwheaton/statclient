# Statclient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1. You will need to download this first. It was written in Typescript (the language Angular 2 uses). I recommend using [Visual Studio Code](https://code.visualstudio.com/) to review the project as it understands Typescript.


### General project structure

_Angular 2 uses a component model. Each component consists of a class (my.component.ts), template (my.component.html), and a style (my.component.css)_

* src/index.html - entry point for the app
* src/main.ts - bootstraps the app
* src/app/app.module.ts - configure the app:
  * imports other modules
  * declares components
  * sets up services for dependency injection
  * sets up routing
  * provides a bridge from redux to angular
* src/app/app.component.ts
  * basic shell
* src/app/home
  * the _container_ component
  * listens to UI events from _presentational_ components
  * dispatches redux actions
  * subscribes to the redux store and pushes data to presentational components
  * transforms rankings data from api to chart data format
* src/app/filters
  * contains controls to filter ranking data and upload a CSV
* src/app/uploader
  * uploads a file
* src/app/line-chart
  * the chart component
* src/app/store
  * redux store. State model, actions, reducer
* src/app/shared
  * app services, route definitions, and model
* src/environments
  * configs for prod / dev environments

### Running the app

Once you install Angular CLI, run `ng serve --prod` to point the app at the api running on Azure. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Using the app

There are a few quirks to be aware of when using this MVP:

* A keyword is required to get rankings (api doesn't require it, but the client app does).
* There is no error checking for date ranges (ie. end_date < start_date)
* When importing a CSV file
  * **it must be tab delimited** I can change this to comma delimited, but the .csv file I received for the project was tab delimited. 
  * Import button is at the far right on the toolbar
  * All existing data is wiped on import
  * Filters in toolbar do not refresh after import. Reload the page to update the filters
* When downloading a CSV file **it will be comma delimted**. I opted to do this as it's the format most people expect.
* I didn't have time to improve the layout of the charts to better fit the width of the screen

