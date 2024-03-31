describe('Validate different test in Orange HRM',() =>{
    //beforeEach(function (){
        it("Login page",() =>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
            cy.get('.oxd-button').click()
       //  })
    })
    //it("Validate timesheet page",() => {
      //  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet")




    //})
})