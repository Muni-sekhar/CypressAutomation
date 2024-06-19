class userAccountLoginPage{
    Deposit(){
        return cy.xpath('//button[@ng-click="deposit()"]')
    }
    enterAmount(){
        return cy.xpath('//input[@ng-model="amount"]')
    }
    DepositButton(){
        return cy.xpath('//button[@type="submit"]')
    }
    Transctions(){
        return cy.xpath('//button[@ng-click="transactions()"]')
    }
    depositedAmount(tableRow){
        return cy.xpath("//tbody/tr["+tableRow+"]/td[2]")
    }

    BackButton(){
        return cy.xpath('//button[@ng-click="back()"]')
    }
    Withdrawl(){
        return cy.xpath('//button[@ng-click="withdrawl()"]')
    }
    Withdrawamount(){
        return cy.xpath('//input[@ng-model="amount"]')
    }
    Withdrawbutton(){
        return cy.xpath('//button[@type="submit"]')
    }
    LogOutButton(){
        return cy.xpath('//button[@ng-show="logout"]')
    }
    HomeButton(){
        return cy.xpath('//button[@ng-click="home()"]')
    }

}
const userAccLoginPage = new userAccountLoginPage

Cypress.Commands.add("ClickOnDepositButton",()=>{
    // Click on Deposit Button
    userAccLoginPage.Deposit().should('be.visible')
    userAccLoginPage.Deposit().click()
})
Cypress.Commands.add("AddDepositAmount",(AmounttobeDeposited)=>{
//Enter the Amount
userAccLoginPage.enterAmount().type(AmounttobeDeposited)
// Click on Deposit Button
userAccLoginPage.DepositButton().click()
//Verify the successfully message
cy.xpath('//span[@ng-show="message"]').contains('Deposit Successful').should('be.visible');
//Log deposit success message
cy.xpath('//span[@ng-show="message"]').then((depositMsg)=>{
    const depositSuccessMsg=depositMsg.text()
    cy.log(depositSuccessMsg)
})
})

Cypress.Commands.add("ClickOnTransctionButton",(tableRow)=>{
    //Click on Transction Button
    userAccLoginPage.Transctions().click()
    //Verify deposited amount in transaction page
    cy.wait(2000)
    cy.reload()
    userAccLoginPage.depositedAmount(tableRow).then((amount)=>{
       const depositedAmount=amount.text()
       cy.log(depositedAmount)
    })
    //Click on Back Button
    userAccLoginPage.BackButton().click()

})
Cypress.Commands.add("ClickOnWithdralButton",(AmounttobeWithdrawn)=>{
    //Click on WithDrawl Button
    userAccLoginPage.Withdrawl().click()
    //Enter the amount
    userAccLoginPage.Withdrawamount().type(AmounttobeWithdrawn)
    //Click on Withdraw Button
    userAccLoginPage.Withdrawbutton().click()
    //Verify Success Message
    cy.xpath('//span[@ng-show="message"]').contains('Transaction successful').should('be.visible');

})
Cypress.Commands.add('ClickLogOutButton',()=>{
    //Click on LogOut Button
    userAccLoginPage.LogOutButton().click()
})
Cypress.Commands.add('BackToHomePage',()=>{
    //Click on Home Button
    userAccLoginPage.HomeButton().click()
})
export default userAccountLoginPage