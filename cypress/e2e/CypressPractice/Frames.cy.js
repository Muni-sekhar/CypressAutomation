describe("Handling iframes", () => {

    it.skip("Frames", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")

        //Approch number1

        cy.get('#mce_0_ifr').then((iframe) => {

            let data = iframe.contents().find('#tinymce')

            cy.wrap(data).clear().type("Welcome to the cypress automation{ctrl+a}")
            cy.get('[aria-label="Bold"]').click()
            cy.get('[aria-label="Italic"]').click()



        })
    })

    it("Frames 2", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#courses-iframe').scrollIntoView().then((iframe) => {
            let test = iframe.contents().find('[href="practice-project"]')
            cy.wrap(test).eq(0).click()

            // cy.origin('https://rahulshettyacademy.com/AutomationPractice/', () => {

            //     cy.get('#courses-iframe').find('form>div>div>input[name="email"]').type('welcome to the iframe')

            // })
            //cy.wrap(test).find('form>div>div>input[name="email"]').type('welcome to the iframe')

            //cy.get('[name="email"]').type("Abc")
        })
    })

    it.skip("Frames 3", () => {
        cy.visit("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame")

        cy.get('[name="globalSqa"]').then((iframe) => {
            let data = iframe.contents().find('#mobile_menu_toggler')
            cy.wrap(data).eq(0).click()

            

            
        })
    })

//Method2

})

