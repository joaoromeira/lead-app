/// <reference types="cypress" />

Cypress.Commands.add('verifyIfNotExistInTable', (email: string) => {
  cy.contains(email).should('not.exist');
});
