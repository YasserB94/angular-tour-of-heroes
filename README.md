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
***
### Add Services
- Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service.
- **Services are a great way to share information among classes that _don't know_ each other**

#### @Injectable() services
- the @Injectable() decorator marks the class as one that participates in the dependency injection system.
- The @Injectable() decorator accepts a metadata object for the service, the same way the @Component() decorator did for your component classes.

#### Getting Data
- Removing data access from components means you can change your mind about the implementation anytime, without touching any components. They don't know how the service works.

#### Providing the Data
- By default, ng generate service registers a provider with the root injector for your service by including provider metadata, that's providedIn: 'root' in the @Injectable() decorator.

- When you provide the service at the root level, Angular creates a single, shared instance of HeroService 

#### Calling the data in ngOnInit()
- Reserve the constructor for minimal initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.


#### Observable data
- Observable is one of the key classes in the RxJS library.

-If getHeroes() can't return immediately with hero data, it shouldn't be synchronous, because that would block the browser as it waits to return data.

#### Subscribing to the observable
- Observable.subscribe() is the critical difference.

#### Adding a message Service
- Within the messages component
    - The messageService property must be public because you're going to bind to it in the template.
- Angular only binds to public component properties.

#### Adding messages to hero service
-  This helps when you get to the next section on Routing.
***
### Adding Navigation

#### Adding the AppRoutingModule
- In Angular, the best practice is to load and configure the router in a separate, top-level module. The router is dedicated to routing and imported by the root AppModule.
- ```ng generate module app-routing --flat --module=app```
- ```--flat	Puts the file in src/app instead of its own directory.```
- ```--module=app	Tells ng generate to register it in the imports array of the AppModule.```

- First, the app-routing.module.ts file imports RouterModule and Routes so the application can have routing capability.

- The next import  gives the Router somewhere to go once you configure the routes.

- Notice that the CommonModule references and declarations array are unnecessary, so are no longer part of AppRoutingModule.

#### Routes
The next part of the file is where you configure your routes. Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar.
- A typical Angular Route has two properties:
    - path	A string that matches the URL in the browser address bar.
    - component	The component that the router should create when navigating to this route.

#### RouterModule.forRoot()
- The @NgModule metadata initializes the router and starts it listening for browser location changes.
- The method is called forRoot() because you configure the router at the application's root level. The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.

#### Add RouterOutlet
- The `<router-outlet>` tells the router where to display routed views.
- The RouterOutlet is one of the router directives that became available to the AppComponent because AppModule imports AppRoutingModule which exported RouterModule. The ng generate command you ran at the start of this tutorial added this import because of the --module=app flag. If you didn't use the ng generate command to create app-routing.module.ts, import AppRoutingModule into app.module.ts and add it to the imports array of the NgModule.

#### Add a navigation link using routerLink
- `<a routerLink="/heroes">Heroes</a>`
- A routerLink attribute is set to "/heroes", the string that the router matches to the route to HeroesComponent. The routerLink is the selector for the RouterLink directive that turns user clicks into router navigations. It's another of the public directives in the RouterModule.

#### Adding A deshboard view
Routing makes more sense when your application has more than one view, yet the Tour of Heroes application has only the heroes view.

#### Adding A default route to the router
- When the application starts, the browser's address bar points to the web site's root. That doesn't match any existing route so the router doesn't navigate anywhere. The space below the <router-outlet> is blank.

#### Adding the detail route
- A URL like ~/detail/11 would be a good URL for navigating to the Hero Detail view of the hero whose id is 11.
- `{ path: 'detail/:id', component: HeroDetailComponent },`
- The colon : character in the path indicates that :id is a placeholder for a specific hero id.

#### Routable Component
- The ActivatedRoute holds information about the route to this instance
- The location is an Angular service for interacting with the browser. This service lets you navigate back to the previous view.

#### Extracting the route paramters
- The route.snapshot is a static image of the route information shortly after the component was created.
- The paramMap is a dictionary of route parameter values extracted from the URL.
- Route parameters are always strings. The JavaScript Number function converts the string to a number, 

#### Find the way Back
- The location service's `back()` method allows to easely let the user go back to the previous route.

### Getting Data from a server