class customerloginpageObjects{
    customerloginbutton(){
        return cy.xpath('//button[@ng-click="customer()"]')
    }
    YourName(){
        return cy.xpath('//select[@id="userSelect"]')
    }
    LoginButton(){
        return cy.xpath('//button[@type="submit"]')
    }
}
//Login Customerpage
const customerloginpage = new customerloginpageObjects
Cypress.Commands.add("LoginPage",()=>{
    customerloginpage.customerloginbutton().should("be.visible")
    customerloginpage.customerloginbutton().click()
    //Verify customerlogin page url
    cy.url().should('include','/customer')
})
Cypress.Commands.add("selectCustomerFromDropDown",(yournamedata)=>{
    //Click on Customer Name dropdown
cy.wait(1000)
//select the customer name
customerloginpage.YourName().select(yournamedata)

})
Cypress.Commands.add("ClickOnLoginButton",()=>{
    // Click on login button
    customerloginpage.LoginButton().click()
    //
})


export default customerloginpageObjects