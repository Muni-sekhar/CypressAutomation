//import managerPageObjects from './support/BankManagerPageObjects'

describe("xyz bank suite", function() {

    beforeEach(function () {
        //set viewport size
        cy.viewport(1920, 1080)
        //load the fixture file
        cy.fixture('XYZ').then((test) => {
            this.data = test
            //launch the website
            cy.LogInWebsite(this.data.url)
        })
    })


    it("Click on login button",()=>{
        cy.ClickOnManagerLoginButton()
        cy.AddCustomerLogIn()
        cy.CustomerDetails()
        cy.AccountPage()
    })
   // it("Open Account Page",()=>{
        cy.OpenAccount()
    })
//})