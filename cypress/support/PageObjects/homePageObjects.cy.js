class HomeButtonPage{
    HomeButton(){
        return cy.xpath('//button[@ng-click="home()"]')
    }
}
const HomeButton = new HomeButtonPage

Cypress.Commands.add("navigateBackToHomePage",()=>{
    //click on the home page button
    HomeButton.HomeButton().click()
    //Verify page is redirected to homepage
    cy.url().should('include','/login')
})
export default  HomeButtonPage