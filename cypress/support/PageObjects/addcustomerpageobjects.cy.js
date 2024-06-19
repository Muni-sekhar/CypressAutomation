class addcustomerpage {
    addcustomerbutton(){
        return cy.xpath('//button[@ng-click="addCust()"]')
    }
    customerFirstName(){
        return cy.xpath('//input[@ng-model="fName"]')
    }
    customerLastName(){
        return cy.xpath('//input[@ng-model="lName"]')
    }
    customerPostcode(){
        return cy.xpath('//input[@ng-model="postCd"]')
    }
    customerAddButton(){
        return cy.xpath('//button[@type="submit"]')
    }

}
const customerPage = new addcustomerpage

Cypress.Commands.add("ClickOnAddCustomerButton",()=>{
    //click on the customerbutton to add detals
    customerPage.addcustomerbutton().should("be.visible")
    cy.wait(2000)
    customerPage.addcustomerbutton().click({force:true})
    //verify add customer page URL 
    cy.url().should('include','/addCust')
})
Cypress.Commands.add("EnterCustomerDetails",(Fname,Lname,Pcode)=>{
    //enter the customer detalis
    customerPage.addcustomerbutton().should("be.visible")
    customerPage.customerFirstName().type(Fname)
    customerPage.customerLastName().type(Lname)
    customerPage.customerPostcode().type(Pcode)
})
Cypress.Commands.add("ClickOnCustomerButton",()=>{
    //click on the add button 
    customerPage.customerAddButton().click()
})
export default addcustomerpage