describe('Calendar handling',()=>{
    beforeEach(()=>{
        cy.fixture("Calender").then((Launch)=>{
            cy.visit(Launch.Url)
        })
    })
    it("lanuchwebsite",()=>{
        cy.OnwardFlightTicket()
        cy.get('[class="modal-content"]').should('be.visible')
        //cy.get('#zoid-paypal-buttons-uid_6ad6ea7062_mta6ndm6mzk').should('be.visible')
        cy.wait(3000)
        cy.get('[class="my-4 col-12"]').scrollIntoView().should('be.visible')
        cy.get("#jsx-iframe-3bf8076307").scrollIntoView().then((iframe)=>{
            let test=iframe.contents().find('[role="link"]')
           cy.wrap(test).eq(1).click()
          //cy.get('[role="link"]').click()
          
          })
    })
})
    