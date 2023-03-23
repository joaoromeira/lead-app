/// <reference types="cypress" />

Cypress.Commands.add('deleteUser', (email: string) => {
  cy.intercept('DELETE', `${Cypress.env('apiUrl')}/user`).as('deleteUser');
  cy.intercept('GET', `${Cypress.env('apiUrl')}/user`).as('getUser');

  cy.getElement(`button-delete-${email}`).click();

  cy.wait('@deleteUser').then((interception) => {
    // When the delete method succeeds status equal 200
    expect(interception.response?.statusCode).equal(200);
  });

  cy.wait('@getUser').then((interception) => {
    expect(interception.response?.statusCode).equal(200);
  });
});
