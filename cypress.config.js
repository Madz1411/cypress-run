module.exports = {
  projectId: "buvfxn",
  // The rest of the Cypress config options go here...
}
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
