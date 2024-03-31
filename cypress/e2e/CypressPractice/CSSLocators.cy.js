describe('CSSLocators',() => {

    it("CSSlocators",() => {

     cy.visit('https://automationexercise.com/products')
      
     cy.get('#search_product').type("T-shirt")
     cy.get('#submit_search').click()
     cy.get('.title').should('be.visible')
    




    })
})