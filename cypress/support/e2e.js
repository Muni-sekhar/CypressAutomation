// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
// Import commands.js using ES2015 syntax:
//import './PageObjects/commands'
import 'cypress-mochawesome-reporter/register';
import '@shelex/cypress-allure-plugin';

import '../support/PageObjects/addCustomerPageObjects.cy'
import '../support/PageObjects/bankManagerPageObjects.cy'
import '../support/PageObjects/openAccountPageObjects.cy'
import '../support/PageObjects/customerPageOjects.cy'
import '../support/PageObjects/homePageObjects.cy'
import '../support/PageObjects/customerLoginPageObjects.cy'
import '../support/PageObjects/userAccountLoginPageObjects.cy'


// import managerPageObjects from '../support/BankManagerPageObjects.cy'
//import managersPageObjects from '../support/PageObjects/BankManagerPageObjects.cy'
//import loginPageObjects from './PageObjects/LoginPageObjects.cy.js'
// Alternatively you can use CommonJS syntax:
// require('./commands')

require('cypress-xpath')
