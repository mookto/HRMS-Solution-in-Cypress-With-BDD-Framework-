const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://stagingv2.smartoffice.ai/auth/login",
    viewportWidth: 1620,
    viewportHeight: 800, 
    env: {
      ILYN_URL: "http://3.109.227.225:3333/",
      ILYN_USER: "01980466884",
      ILYN_PASS: "12345678",
      USER_NAME: "mahedi.hasan@byslglobal.com",
      USER_PASS: "12345678",
      SUSER_NAME: "tauhedul.amin@byslglobal.com",
    },

    // All feature files
    specPattern: "cypress/e2e/features/*.feature",

    // Support file

    supportFile: "**/*.feature",

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
        on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        }))
        return config;
      },
      specPattern: "cypress/e2e/features/*.feature"
    
    },

    stepDefinitions: "cypress/e2e/features/**/*.js"
  }
);
