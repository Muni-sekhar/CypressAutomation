describe('testing_the_page',() =>{
    beforeEach(()=>{
        //visit the url page
        cy.visit('https://automationexercise.com/')
        //verify title
        cy.title().should('eq','Automation Exercise')
        //click on singup&login buttton
        cy.xpath("//a[@href='/login']").click()
    })
    it.skip("automation_excisese_signup",()=>{
        cy.Registration_Page()
    })
    it("LogInPageInAutomation",()=>{
        cy.SingUpPageLogIn()
        cy.PlaceOrder()
    })
})