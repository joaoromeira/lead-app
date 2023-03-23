/// <reference types="cypress" />

Cypress.Commands.add('checkUserInTable', (email, check) => {
  cy.contains(email).should(check);
});
