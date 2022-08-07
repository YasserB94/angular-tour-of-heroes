# Tour of Heroes
This repository contains my app following along the official angular tutorial.

## How to use the app ?
Need to have:
    - Node.js
    - npm package manager
    - Angular CLI

Clone this repository, navigate to it in the console and run ```ng serve --open``` to serve it locally and in the browser.

## My Notes per chapter:

### Create a project
- ng new installs the necessary npm packages and other dependencies that Angular requires. This can take a few minutes.
- ng new also creates the following workspace and starter project files
    - A new workspace, with a root directory
    - An initial skeleton application project in the src/app subdirectory
    - Related configuration files
- The ng serve command
    - Builds the application
    - Starts the development server
    - Watches the source files
    - Rebuilds the application as you make changes
#### Adding application styles
- src/styles.css contains application-wide styling to keep consistency.
***
### The Hero Editor
- @Component is a decorator function that specifies the Angular metadata for the component.
- The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic.

#### Show the HeroesComponent View
- To display the HeroesComponent, you must add it to the template of the shell AppComponent.
- Remember that app-heroes is the element selector
- `<app-heroes></app-heroes>`

#### Create a Hero interface
- In it's own file, for this tutorial: /src/app/hero.ts
```
export interface Hero {
  id: number;
  name: string;
}
```

