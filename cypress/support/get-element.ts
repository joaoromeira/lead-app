/// <reference types="cypress" />

Cypress.Commands.add('getElement', (dataCy: string) => {
  return cy.get(`[data-cy="${dataCy}"]`);
});
