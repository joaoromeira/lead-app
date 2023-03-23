/// <reference types="cypress" />

Cypress.Commands.add('saveUser', () => {
  cy.intercept('POST', `${Cypress.env('apiUrl')}/user`).as('saveUser');
  cy.intercept('GET', `${Cypress.env('apiUrl')}/user`).as('getUser');

  cy.getElement('button-save').click();

  cy.wait('@saveUser').then((interception) => {
    // Created status equal 201
    expect(interception.response?.statusCode).equal(201);
  });

  cy.wait('@getUser').then((interception) => {
    expect(interception.response?.statusCode).equal(200);
  });
});
