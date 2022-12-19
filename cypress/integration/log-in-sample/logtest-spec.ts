/// <reference types="cypress" />

import {Given,Then, When} from "cypress-cucumber-preprocessor/steps";

///Then('Admin should see correct site', () => {
   /// cy.url().should("eq","http://web-staging.aonewallet.com");
///});


before(() => {
    Given(`Admin is in web staging`, () => {
      cy.visit(`http://web-staging.aonewallet.com/`);
    });
  });
  
  When(`Admin enters correct credentials`, () => {
    cy.get("button").contains("Login").click();
    cy.get("[placeholder=Username]").type("khea1015");
    cy.get("[type=password]").type("password");
    cy.get("[type=submit]").contains("Login").click();
  });
  
  Then(`Admin should successfully log in`, () => {
      cy.
    });