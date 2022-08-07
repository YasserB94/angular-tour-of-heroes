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

#### Show the hero object.
- Now I have to update the component's binding to the new hero object's attributes.
- ```{{hero.id}}```

#### Format with the Uppercase Pipe
- Pipes are a way in angular to format display data.
- ```{{ hero.name | uppercase }}``` Makes the heroe's name render uppercase.

#### Edit the heroes
- Two way binding
    - setting up a two way data binding between an input element and the hero.name property.
        - [(ngModel)] is Angular's two-way data binding syntax.
    - NgModel lives in @angular.forms and has to be imported to the app to work.
        - ```import { FormsModule } from '@angular/forms'; ```
        - It also has to be added into the ImportsArray of NgModule in order to work.
            - **The imports array contains the list of external modules that the application needs.**
***
### Display a list
- Don't forget to put the asterisk * in front of ngFor. It's a critical part of the syntax.
- The *ngFor is Angular's repeater directive. It repeats the host element for each element in a list.

#### Styling the heroes
-  Styles and style sheets identified in @Component metadata are scoped to that specific component. The heroes.component.css styles apply only to the HeroesComponent and don't affect the outer HTML or the HTML in any other component.

#### Viewing details
- Angular's class binding can add and remove a CSS class conditionally. 
- ```[class.some-css-class]="some-condition"``` to the element you want to style.
***
### Create a feature component
**Keeping all features in one component as the application grows won't be maintainable**

#### Makign HeroDetailComponent
- Adding ? after a property means it can be null ? 

#### Showing the HeroDetailComponent
- ```<app-hero-detail [hero]="selectedHero"></app-hero-detail>```

### Add Services
- Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service.
- **Services are a great way to share information among classes that _don't know_ each other**