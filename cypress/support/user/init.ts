/// <reference types="cypress" />

Cypress.Commands.add('initApp', () => {
  cy.visit(Cypress.env('appUrl'));

  cy.url().should('contain', '/');
});

export {};
