# Statclient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1. You will need to download this first. It was written in Typescript (the language Angular 2 uses). I recommend using [Visual Studio Code](https://code.visualstudio.com/) to review the project as it understands Typescript.

## Project overview
This is the api that the client app connects to. It is built using [ASP.NET Core](https://github.com/aspnet/Home) and connects to a SQL Server Express database. 

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
* src/app/home.component.ts
  * the _container_ component
  * listens to UI events from _presentational_ components
  * dispatches redux actions
  * subscribes to the redux store and pushes data to _presentational_ components


### Running the app

Once you install Angular CLI, run `ng serve --prod` to point the app at the api running on Azure. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

