/// <reference types="cypress" />

import { generateEmail } from 'cypress/scripts/generate-email';

describe(
  `Try to create and delete an user`,
  {
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
  () => {
    context('Given that: go to home page', () => {
      it('So: check if the page load with the correct initial params', () => {
        cy.initApp();
      });
    });

    const email = generateEmail();

    context('Given that: the page are rendered', () => {
      it(`So: fill user form`, () => {
        cy.fillForm({ email });
      });
    });

    context('Given that: the form are filled', () => {
      it(`So: save user`, () => {
        cy.saveUser();
      });
    });

    context('Given that: user are saved', () => {
      it(`So: verify if form are cleared`, () => {
        cy.verifyIfFormAreCleared();
      });
    });

    context('Given that: user are saved and form are cleared', () => {
      it(`So: verify if user (${email}) exist in table`, () => {
        cy.checkUserInTable(email, 'exist');
      });
    });

    context('Given that: user exist in table', () => {
      it(`So: delete user (${email})`, () => {
        cy.deleteUser(email);
      });
    });

    context('Given that: user are deleted', () => {
      it(`So: verify if user (${email}) not exist in table`, () => {
        cy.checkUserInTable(email, 'not.exist');
      });
    });
  }
);

export {};
