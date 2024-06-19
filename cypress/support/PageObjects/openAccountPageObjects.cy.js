class OpenAccount{
    OpenAccountPage(){
        return cy.xpath('//button[@ng-class="btnClass2"]')
    }
    SelectCustomerName(){
        return cy.xpath('//select[@id="userSelect"]')
    }
    CurrencyButton(){
        return cy.xpath('//select[@id="currency"]')
    }
    ProccessButton(){
        return cy.xpath('//button[@type="submit"]')
    }
}
const OpenAccountPage = new OpenAccount

Cypress.Commands.add("ClickOnOpenAccountButton",()=>{
    //click on the open page button
    OpenAccountPage.OpenAccountPage().should("be.visible")
    OpenAccountPage.OpenAccountPage().click()
})
Cypress.Commands.add("selectCustomerAndCurrencyFromDropDown",(customerData,currencyData)=>{
    //Click on Customer Name dropdown
    cy.wait(1000)
    //select the customer name
    OpenAccountPage.SelectCustomerName().select(customerData)
    //Click on currency value drop down
    //select currency value
    OpenAccountPage.CurrencyButton().select(currencyData)
})

Cypress.Commands.add("ClickOnProccesButton",()=>{
    //click to proccess button
    OpenAccountPage.ProccessButton().click({force:true})
    //Verify the successfully message
    
})

Cypress.Commands.add("verifyAccountCreationMessage",()=>{

    cy.on('window:alert',(test)=>{

        expect(test).to.equal('Account created successfully with account Number :1020')
    })

})


export default OpenAccount
