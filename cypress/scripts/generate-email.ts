export const generateEmail = (): string =>
  `cypress.user+${new Date().getTime()}@app.com`;
