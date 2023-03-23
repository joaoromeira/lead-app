/// <reference types="cypress" />

import { generateEmail } from 'cypress/scripts/generate-email';

import { FillForm } from './fill-form.interface';

Cypress.Commands.add('fillForm', (args?: FillForm) => {
  cy.getElement('text-input-name').type(args?.name || 'Cypress');
  cy.getElement('text-input-email').type(args?.email || generateEmail());
});
