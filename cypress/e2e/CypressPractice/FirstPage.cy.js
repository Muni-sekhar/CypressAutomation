/// <reference types='cypress' />

describe("Automation Suite", function () {

    it("Login Test", function () {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq', 'Automation Exercise')
        cy.get('a[href="/login"]').should('be.visible').click()

        cy.get('input[data-qa="login-email"]').clear().type(' TestUser@yopmail.com')
        cy.get('input[data-qa="login-password"]').clear().type('Test@123')
        cy.get('button[data-qa="login-button"]').click()
        //Verify text after successfull login
        cy.get('li:nth-child(10) a:nth-child(1)').should('have.text',' Logged in as TestUser')
       
       
    })


})