/// <reference types="cypress" />

Cypress.Commands.add('saveUser', () => {
  cy.intercept('POST', `${Cypress.env('apiUrl')}/user`).as('saveUser');

  cy.getElement('button-save').click();

  cy.wait('@saveUser').then((interception) => {
    // Created status
    expect(interception.response?.statusCode).equal(201);
  });
});
