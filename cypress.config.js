const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://automationpractice.com/",
    chromeWebSecurity: false,
    defaultCommandTimeout: 10_000,
  },
});
