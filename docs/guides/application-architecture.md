# Introduction to Application Architecture

Although not mandatory, all suggestions listed below should be considered as best-practice guidelines to keep your application well organized, extensible and maintainable. The following is the recommended directory structure for an Extension React application:

```
+-- node_modules: NPM components
+-- src
|   +-- css
|   |   +-- _variables.scss: application styles constant values
|   |   +-- app.scss: application styles
|   +-- js
|   |   +-- common: code of shared function
|   |   +-- components: code (scripts and views) of every feature should be a sub-directory
|   |   +-- services: code of services
|   |   +-- stores: code of stores
|   |   +-- ux: code of shared components
|   |   +-- main.js: main script
+-- gulpfile.babel.js: build scripts
+-- index.html: application page
+-- package.json: NPM package definition
+-- server.js: code of local web server (ExpressJS)
```

Based on this seed structure, you're ready to make any change to build your application.

Extension React provides support for both MVC and MVVM application architectures. Both of these architectural approaches share certain concepts and focus on dividing application code along logical lines. Each approach has its strengths based on how it chooses to divide up the pieces of an application.

## MVC

In an MVC architecture, most classes are either Models, Views or Controllers. The user interacts with Views, which display data held in Models. Those interactions are monitored by a Controller, which then responds to the interactions by updating the View and Model, as necessary.

The View and the Model are generally unaware of each other because the Controller has the sole responsibility of directing updates. Generally speaking, Controllers will contain most of the application logic within an MVC application. Views ideally have little (if any) business logic. Models are primarily an interface to data and contain business logic to manage changes to said data.

The goal of MVC is to clearly define the responsibilities for each class in the application. Because every class has clearly defined responsibilities, they implicitly become decoupled from the larger environment. This makes the app easier to test and maintain, and its code more reusable.

## MVVM

The key difference between MVC and MVVM is that MVVM features an abstraction of a View called the ViewModel. The ViewModel coordinates the changes between a Model’s data and the View's presentation of that data using a technique called “data binding”.

The result is that the Model and framework perform as much work as possible, minimizing or eliminating application logic that directly manipulates the View.

## MVC and MVVM

To understand how these choices fit into your application, we should start by further defining what the various abbreviations represent.

 * **(M) Model** - This is the data for your application. A set of classes (called “Models”) defines the fields for their data (e.g. a User model with user-name and password fields). Models know how to persist themselves through the data package and can be linked to other models via associations. Models are normally used in conjunction with Stores to provide data for grids and other components. Models are also an ideal location for any data logic that you may need, such as validation, conversion, etc.

 * **(V) View** - A View is any type of component that is visually represented. For instance, grids, trees and panels are all considered Views.

 * **(C) Controller** - Controllers are used as a place to maintain the view's logic that makes your app work. This could entail rendering views, routing, instantiating Models, and any other sort of app logic.

 * **(VM) ViewModel** - The ViewModel is a class that manages data specific to the View. It allows interested components to bind to it and be updated whenever this data changes.