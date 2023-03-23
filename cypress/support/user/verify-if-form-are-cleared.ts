/// <reference types="cypress" />

Cypress.Commands.add('verifyIfFormAreCleared', () => {
  cy.getElement('text-input-name').should('have.value', '');
  cy.getElement('text-input-email').should('have.value', '');
});
