const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

//   reporterOptions:{
//     "charts":true,
//     "reportPageTitle":"XYZ Bank Reports",
//     "embeddedScreenshots":true,
//     "inlineAssets":true,
//     "saveAllAttempts":false,
//     "autoOpen":true,
//     "reportTitle": "Mocha AwesomeReport-XYZBank",
//     "reportFilename": "[status]_[datetime]-[name]-report",
//     "code":false,
//     "override": false
    
//  },

  e2e: {
    "env": { 
      allure:true,
      allureResultsPath:"allure-results",
    },
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;
      // implement node event listeners here
    },
  },
});

