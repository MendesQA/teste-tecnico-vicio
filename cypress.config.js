const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://betaconcursos.metodovde.com.br/entrar',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
