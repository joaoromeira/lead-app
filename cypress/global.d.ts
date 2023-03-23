/// <reference types="cypress" />

declare namespace Cypress {
  import { FillForm } from './support/interfaces';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable {
    /**
     * Utils
     */
    getElement(dataCy: string): Chainable<any>;

    /**
     * User commands
     */
    initApp(): Chainable<any>;

    checkUserInTable(
      email: string,
      condition: 'exist' | 'not.exist'
    ): Chainable<any>;

    deleteUser(email: string): Chainable<any>;

    fillForm(args?: FillForm): Chainable<any>;

    saveUser(): Chainable<any>;

    verifyIfFormAreCleared(): Chainable<any>;
  }
}
