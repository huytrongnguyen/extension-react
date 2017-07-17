import React, { Component } from 'react';
import { Route, Container, String } from '~/rext';

@Route('/core-concepts/application-architecture')
export default class Architecture extends Component {
  render() {
    return <Container>
      <div className="panel-header">
        <h1 className="panel-title">Application Architecture</h1>
      </div>
      <Container className="panel-body">
        <p>
          Extension React provides support for both MVC and MVVM application architectures.
          Both of these architectural approaches share certain concepts and focus on dividing application code along logical lines.
          Each approach has its strengths based on how it chooses to divide up the pieces of an application.
        </p>
        <h3>MVC</h3>
        <p>
          In an MVC architecture, most classes are either Models, Views or Controllers.
          The user interacts with Views, which display data held in Models.
          Those interactions are monitored by a Controller, which then responds to the interactions by updating the View and Model, as necessary.
        </p>
        <p>
          The View and the Model are generally unaware of each other because the Controller has the sole responsibility of directing updates.
          Generally speaking, Controllers will contain most of the application logic within an MVC application.
          Views ideally have little (if any) business logic.
          Models are primarily an interface to data and contain business logic to manage changes to said data.
        </p>
        <p>
          The goal of MVC is to clearly define the responsibilities for each class in the application.
          Because every class has clearly defined responsibilities, they implicitly become decoupled from the larger environment.
          This makes the app easier to test and maintain, and its code more reusable.
        </p>
        <h3>MVVM</h3>
        <p>
          The key difference between MVC and MVVM is that MVVM features an abstraction of a View called the ViewModel.
          The ViewModel coordinates the changes between a Model’s data and the View's presentation of that data using a technique called “data binding”.
        </p>
        <p>
          The result is that the Model and framework perform as much work as possible, minimizing or eliminating application logic that directly manipulates the View.
        </p>
        <h3>MVC and MVVM</h3>
        <p>
          To understand how these choices fit into your application, we should start by further defining what the various abbreviations represent.
        </p>
        <p>
          <ul className="list-style-disc">
            <li>
              <strong>(M) Model</strong> - This is the data for your application.
              A set of classes (called “Models”) defines the fields for their data (e.g. a User model with user-name and password fields).
              Models know how to persist themselves through the data package and can be linked to other models via associations.
              Models are normally used in conjunction with Stores to provide data for grids and other components.
              Models are also an ideal location for any data logic that you may need, such as validation, conversion, etc.
            </li>
            <li>
              <strong>(V) View</strong> - A View is any type of component that is visually represented. For instance, grids, trees and panels are all considered Views.
            </li>
            <li>
              <strong>(C) Controller</strong> - Controllers are used as a place to maintain the view's logic that makes your app work.
              This could entail rendering views, routing, instantiating Models, and any other sort of app logic.
            </li>

            <li>
              <strong>(VM) ViewModel</strong> - The ViewModel is a class that manages data specific to the View.
              It allows interested components to bind to it and be updated whenever this data changes.
            </li>
          </ul>
        </p>
      </Container>
    </Container>
  }
}