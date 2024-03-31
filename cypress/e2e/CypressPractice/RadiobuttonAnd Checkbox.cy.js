

describe("Check UI Elements", () => {


    it.skip("Signup Page", () => {
        cy.visit("https://automationexercise.com/")

        cy.get("a[href='/login']").click()
        cy.get("input[placeholder='Name']").type("Sekhar")
        //Random email generation   
        const randomEmail = Math.random().toString(36).substring(2, 15) + "@gmail.com"
        cy.log(randomEmail)

        cy.get("input[data-qa='signup-email']").type(randomEmail)
        cy.get("button[data-qa='signup-button']").click()

        //Vidibulity of Radio Button
        cy.get("#id_gender1").should('be.visible')
        cy.get("#id_gender2").should('be.visible')

        // Selecting Radio Button
        cy.get("#id_gender1").check().should('be.checked')
        cy.get("#id_gender2").should('not.be.checked')
        // Enter the password
        const ramdomPassword = Math.random().toString(36).slice(2, 15)
        cy.log(ramdomPassword)
        cy.xpath("//input[@id='password']").type(ramdomPassword)
        // Selecting Dropdowns
        cy.xpath("//select[@id='days']").select('5')
        cy.xpath("//select[@id='months']").select('October')
        cy.xpath("//select[@id='years']").select('1999')
        // Selecting Check Box
        cy.xpath("//input[@id='newsletter']").check()

        //Enter all address information
        cy.xpath("//input[@id='first_name']").type('Muni')
        cy.xpath("//input[@id='last_name']").type('Sekhar')
        cy.xpath("//input[@id='company']").type('ABC')
        cy.xpath("//input[@id='address1']").type('Telegana')
        cy.xpath("//input[@id='address2']").type('Hyderbad')
        cy.xpath("//select[@id='country']").select('India')
        cy.xpath("//input[@id='state']").type('Telegana')
        cy.xpath("//input[@id='city']").type('Hyderbad')
        cy.xpath("//input[@id='zipcode']").type('500063')
        cy.xpath("//input[@id='mobile_number']").type('5678901234')
        cy.xpath("//button[normalize-space()='Create Account']").click()

    })

    it.skip("Login Page", function () {
        cy.xpath("//input[@data-qa='login-email']").type("lbqlluajqvj@gmail.com")
        cy.xpath("//input[@placeholder='Password']").type("qpgh5mzzvno")
        cy.xpath("//button[@data-qa='login-button']").click()
    })


    it.skip("incorrect email & password", function () {
        cy.xpath("//input[@data-qa='login-email']").type("lbqlluafgjqvj@gmail.com")
        cy.xpath("//input[@placeholder='Password']").type("qprtgh5mzzvno")
        cy.xpath("//button[@data-qa='login-button']").click()
        // Idetify the error message
        cy.xpath("//p[normalize-space()='Your email or password is incorrect!']").should('have.text', 'Your email or password is incorrect!')
    })
    beforeEach(() => {
        cy.visit("https://automationexercise.com/")
        cy.get("a[href='/login']").click()
    })

    it.skip("logout user", function () {
        cy.xpath("//input[@data-qa='login-email']").type("lbqlluajqvj@gmail.com")
        cy.xpath("//input[@placeholder='Password']").type("qpgh5mzzvno")
        cy.xpath("//button[@data-qa='login-button']").click()
        cy.get("a[href='/logout']").click()

    })

    it("Resigster user with exiting email", function () {
        cy.get("input[data-qa='signup-email']").type("lbqlluajqvj@gmail.com")
        cy.get("input[placeholder='Name']").type("Sekhar")
        cy.xpath("//button[normalize-space()='Signup']").click()
        cy.xpath("//p[normalize-space()='Email Address already exist!']").should('have.text', 'Email Address already exist!')
    })

    it.skip("Contact us form", function () {
        cy.get("a[href='/contact_us']").click()
        cy.xpath("//input[@placeholder='Name']").type('Muni')
        cy.xpath("//input[@placeholder='Email']").type('lbqlluajqvj@gmail.com')
        cy.xpath("//input[@placeholder='Subject']").type('asdfgh')
        cy.xpath("//textarea[@id='message']").type('xcvbnm')
        cy.xpath("//input[@name='upload_file']").attachFile('Hari.xlsx')
        cy.xpath("//input[@name='submit']").click()
    })

    it.skip("Products page", function () {
        cy.get("a[href='/products']").click()
        cy.xpath("//input[@id='search_product']").type('Blue Top')
        cy.xpath("//button[@id='submit_search']").click()
        cy.get("a[href='/product_details/1']").click()
        cy.xpath("//h2[normalize-space()='Blue Top']").should('have.text', 'Blue Top')
        cy.xpath("//input[@id='quantity']").type('3')
    })

    it.skip("Subcription Home Page", function () {
        cy.xpath("//a[normalize-space()='Home']").click()
        cy.xpath("//h2[normalize-space()='Subscription']").scrollIntoView()
        cy.xpath("//h2[normalize-space()='Subscription']").should('have.text', "Subscription")
        cy.xpath("//input[@id='susbscribe_email']").type("test@gmail.com")

        cy.xpath("//button[@id='subscribe']").click({ force: true })

        cy.xpath("//div[@class='alert-success alert']").scrollIntoView().should('be.visible')
        cy.wait(1000)
    })
    it.skip("Adding product to cart",function(){
        cy.AddProductToCart()
        cy.EnterPaymentDetails()
        
    })
    it.only("Remove Products From Cart",function(){
        cy.xpath("//a[normalize-space()='Cart']").click()
        cy.xpath("//tr[@id='product-1']//i[@class='fa fa-times']").click()

    })
    


})