describe("Tooltip", () => {


    it("verify tool tip on bottom", () => {
        cy.visit("https://practice.expandtesting.com/tooltips")

        cy.get('#btn3').trigger('mouseover')

        cy.get('.tool,tip-inner').should('have.text', 'Tooltip on bottom')

        //Get tool tip text

        cy.get('.tooltip-inner').then((test) => {
            let tooltiptext = test.text()

            cy.log(tooltiptext)
        })


        //cy.get('.tooltip-inner').should('have.text','Tooltip on top')

    })
})