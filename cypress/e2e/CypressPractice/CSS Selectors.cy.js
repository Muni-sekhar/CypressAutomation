
describe("Css selectors",() =>{
   
it.skip('Signup page',() =>{
    cy.visit("https://naveenautomationlabs.com/opencart/")
    cy.get('.list-inline > .dropdown > .dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(1) > a').click()
    cy.get("#input-firstname").type("Muni")
    cy.get("#input-lastname").type("Sekhar")
    cy.get("#input-email").type("sekhar3@yopmail.com")
    cy.get("[type=tel]").type("987654321")
    cy.get("#input-password").type("Test@123")
    cy.get("#input-confirm").type("Test@123")
    cy.get("[name='newsletter']").eq(0).check().should('be.checked')
    cy.get("[type=checkbox]").click()
    cy.get("[type=submit]").click()
    cy.get('.pull-right > .btn').click()

})
beforeEach( () =>{
    cy.visit("https://naveenautomationlabs.com/opencart/")
})
it.only('Login page',() =>{
    cy.get('.dropdown > .dropdown-toggle > .fa').click()
    cy.get('.dropdown-menu > :nth-child(2) > a').click()
    cy.get('#input-email').type("sekhar3@yopmail.com")
    cy.get('#input-password').type("Test@123")
    cy.get('[type=submit]').click()

})




})


    