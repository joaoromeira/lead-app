/// <reference types="cypress" />

Cypress.Commands.add('verifyIfExistInTable', (email: string) => {
  cy.contains(email).should('exist');
});
