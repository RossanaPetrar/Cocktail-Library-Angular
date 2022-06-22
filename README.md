# Cocktail Library Web App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## About
Imagine you're at a friend's house, having a good time and thinking about making yourself a cocktail. You're bored of the old vodka and juice drinks and want something more interesting - plus you want to impress your friends. All you have to do is open the "My Bar" app on your phone and choose one of your tasty drinks!

The ideea for this app came to me when, for my birthday in 2022, my friends made me a collection of cocktails, each adding their favorite mixed drink. They also made a fun game where I had to guess who's cocktail was who's. Because I love mixed drinks, be they alcoholic or non-alcoholic, being able to store the recipes somewhere and look them up whenever is of great use to me.

## Project overview

Here you can see the website functionalitites in action.

https://user-images.githubusercontent.com/97961954/174989624-3f5cd055-cc9a-44bb-a476-3f09e6640c09.mp4


**Home page:** A simple welcome page with a button to take you to the "Your Cocktails" page.

![Cocktail-web-app-1](https://user-images.githubusercontent.com/97961954/174968923-5d4a6fa7-224f-4d5a-9282-2589a28fedd1.jpg)



**Your Cocktails page:** The main page of this app. Here you can see all your cocktails, filter them by name or by alcohol content, edit them or delete them from the database.

![Cocktail-web-app-2](https://user-images.githubusercontent.com/97961954/174971192-b655248a-ef4c-4942-9f13-93a13f697fb0.jpg)

Every cocktail is presented in a card, with a picture, details and buttons to edit or delete each one.

![Cocktail-web-app-3](https://user-images.githubusercontent.com/97961954/174981494-e0f899a2-2071-43f0-8bca-5ec53d0efab6.jpg)

![Cocktail-web-app-4](https://user-images.githubusercontent.com/97961954/174981520-0a6342c0-c40a-4d8e-8e4e-ea5a427be567.jpg)

![Cocktail-web-app-6](https://user-images.githubusercontent.com/97961954/174981566-ce7eb3f9-794d-483e-82a5-ce03a4453f34.jpg)

![Cocktail-web-app-5](https://user-images.githubusercontent.com/97961954/174981604-efdf3359-f49c-423d-882a-54c13a78ac45.jpg)

![Cocktail-web-app-8](https://user-images.githubusercontent.com/97961954/174981647-2cd88994-8508-4f08-b684-41861a5984e1.jpg)

The edit button opens up a modal with all the cocktail details, and you can edit them however you want. If you hit the save button, the edited cocktail gets added to the database and the changes are reflected in the UI instantly.

![Cocktail-web-app-12](https://user-images.githubusercontent.com/97961954/174982780-b1d13eb4-780e-41b0-bb2f-279124066f3c.jpg)

![Cocktail-web-app-13-2](https://user-images.githubusercontent.com/97961954/174983285-0a6797f3-5baa-4820-8184-489245641d87.jpg)

You can also filter the cocktails by name, using the search bar.

![Cocktail-web-app-9](https://user-images.githubusercontent.com/97961954/174983474-3eb2761a-800b-4695-b6f2-8813bcd8449c.jpg)

Or by alcohol content using the buttons below the search bar.

![Cocktail-web-app-10](https://user-images.githubusercontent.com/97961954/174983626-2a05c7c2-73a3-45af-be80-93a3f251b002.jpg)

![Cocktail-web-app-11](https://user-images.githubusercontent.com/97961954/174983642-8f01aa09-26e2-4495-a8f7-a451766dfe86.jpg)



**Add a Cocktail page:** a page with a form where you can add a new cocktail to the database.

![Cocktail-web-app-14](https://user-images.githubusercontent.com/97961954/174983949-08aacf16-1351-40e2-8414-472e1b53790e.jpg)

![Cocktail-web-app-15](https://user-images.githubusercontent.com/97961954/174983962-43b59333-b074-462c-bb30-f9e534cf1081.jpg)

The cocktail is added to the list, with the same formatting as the others.

![Cocktail-web-app-16](https://user-images.githubusercontent.com/97961954/174984230-7b6fc409-d63e-48b7-9d68-8495b1de599c.jpg)



**Responsiveness:** the website is responsive, as you can see from these examples:

![Cocktail-web-app-22](https://user-images.githubusercontent.com/97961954/174987107-630fb062-2637-4fb8-aa2e-2daaa68c59fb.jpg)

![Cocktail-web-app-23](https://user-images.githubusercontent.com/97961954/174987126-598f3418-bd48-458e-ab75-a7aef194061e.jpg)


## Development server

Run `ng serve --open` for a dev server. It will automatically open the browser to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `npm run server` to have access to the json database and be able to use the website's CRUD functionalities.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
