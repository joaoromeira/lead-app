/// <reference types="cypress" />

Cypress.Commands.add('deleteUser', (email: string) => {
  cy.intercept('DELETE', `${Cypress.env('apiUrl')}/user`).as('deleteUser');

  cy.getElement(`button-delete-${email}`).click();

  cy.wait('@deleteUser').then((interception) => {
    // When the delete method succeeds status equal 200
    expect(interception.response?.statusCode).equal(200);
  });
});
