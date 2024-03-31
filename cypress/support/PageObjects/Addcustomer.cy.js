class addcustomerpage {
    addcustomerbutton(){
        return cy.xpath('//button[@ng-class="btnClass1"]')
    }
    costomerpage(){
        return cy.xpath('//input[@ng-model="fName"]')
    }
    Lastname(){
        return cy.xpath('//input[@ng-model="lName"]')
    }
    Postalcode(){
        return cy.xpath('//input[@ng-model="postCd"]')
    }
    Addcustomer(){
        return cy.xpath('//button[@type="submit"]')
    }
}
const costomerpage = new addcustomerpage
Cypress.Commands.add("AddCustomerLogIn",()=>{
    costomerpage.addcustomerbutton().should("be.visible")
    costomerpage.addcustomerbutton().click()
})
Cypress.Commands.add("CustomerDetails",()=>{
    costomerpage.costomerpage().should("be.visible")
    costomerpage.costomerpage().type('muni')
    costomerpage.Lastname().type('Sekhar')
    costomerpage.Postalcode().type('524121')
    costomerpage.Addcustomer().click()

    
})
export default addcustomerpage