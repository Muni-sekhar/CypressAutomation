describe('My First Test', () => {

    it('verify title-positive', () => {
     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     cy.title().should('eq','OrangeHRM')      
    })

    it('verify title-Negative', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM456')      
       })
   

  })