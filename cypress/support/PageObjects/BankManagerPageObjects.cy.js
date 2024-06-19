class managerPageObjects{
    bankManagerLoginButton(){
        return cy.xpath('//button[@ng-click="manager()"]')
    }
}
//object create on BankManagerPage
const BankManagerPage= new managerPageObjects
//create costamcommand on log in button
Cypress.Commands.add("ClickOnManagerLoginButton",()=>{
    //assertion on login button
    BankManagerPage.bankManagerLoginButton().should("be.visible")
    //click on the log in buttotn
    BankManagerPage.bankManagerLoginButton().click()
    
})

export default managerPageObjects