class CustomerPage{
    CustomersButton(){
        return cy.xpath('//button[@ng-class="btnClass3"]')
    }

    customerName(){
        return cy.xpath('//tbody/tr[6]/td[1]')
    }
   
}
const CustomerView = new CustomerPage
Cypress.Commands.add("verifyCustomerOnCustomerPage",()=>{
    //click on Customer Button
    CustomerView.CustomersButton().click()
    //Verify customers page url
    cy.url().should('include','/list')

    //Verify customer name
    CustomerView.customerName().then((cName)=>{
        const custmerFname=cName.text()
        cy.log(custmerFname)
        expect('Muni').to.equal(custmerFname)
    })

})

export default CustomerPage