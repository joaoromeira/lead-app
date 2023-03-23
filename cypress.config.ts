import { defineConfig } from 'cypress';

export default defineConfig({
  defaultCommandTimeout: 30000,
  env: {
    appUrl: 'http://localhost:3000',
    apiUrl: 'http://localhost:3000/api',
    desktopMinViewportWidth: 800,
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
