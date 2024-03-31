describe("ParaBank_Register",() =>{
    beforeEach(()=>{
        cy.fixture("RegistationData").then((muni)=>{
            cy.visit(muni.url)
        })
    })
    it('Register page',() =>{
        cy.parabank()
    })
})