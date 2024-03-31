<reference types="cypress-xpath" />
class OpenAccountpage{
    openaccountbutton(){
        return cy.xpath('//button[@ng-click="openAccount()"]')
    }
}
const data= new OpenAccountpage()
//create costamcommand on OpenAccount in button
Cypress.Commands.add("AccountPage",()=>{
    data.openaccountbutton().should('be.visible')
    data.openaccountbutton().click()


})