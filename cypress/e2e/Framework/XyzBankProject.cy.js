//import managerPageObjects from './support/BankManagerPageObjects'

describe("XYZ BankProject Suite", function() {

    beforeEach(function () {
        //set viewport size
        cy.viewport(1920, 1080)
        //load the fixture file
        cy.fixture('XYZ').then((test) => {
            this.data = test
            //launch the website
           //cy.LogInWebsite(this.data.url)
           cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        })
    })
    //Tests 

    it("Add a new customer as a bank manager",function(){
        //click on the manager button
        cy.ClickOnManagerLoginButton()
        //click on the add customer button
        cy.ClickOnAddCustomerButton()
        //fill the cutomer details
        cy.EnterCustomerDetails(this.data.Fname,this.data.Lname,this.data.Pcode)
        //Click on add customer button
        cy.ClickOnCustomerButton()
        //Click on open account button as manager
        cy.ClickOnOpenAccountButton()
        //Select user name & Currency from the dropdown
        cy.selectCustomerAndCurrencyFromDropDown(5,3)
        //Click on process button
        cy.ClickOnProccesButton()

        cy.verifyAccountCreationMessage()
        //Verify Customer on customer page
         cy.verifyCustomerOnCustomerPage()
         //Navigate back to HomePage
         cy.navigateBackToHomePage()
    })   

   it("Customer Login Page",function(){
   //Verify Customer Login Page
   cy.LoginPage()
   //Select CustomerName from the dropdown
   cy.selectCustomerFromDropDown(3)
   //Click on login button
   cy.ClickOnLoginButton()
   // Click on Deposit Button
   cy.ClickOnDepositButton()
   // Enter the Amount
   cy.AddDepositAmount(20000)
   //Click On Transctions Button
   cy.ClickOnTransctionButton(1)
   //Click On WithDrawl Button
   cy.ClickOnWithdralButton(10000)
   //Click on Log Out Button
   cy.ClickLogOutButton()
   //Back to Home Page
   cy.BackToHomePage()

   })
    
})
