describe("Automation Pratice",()=>{
    beforeEach(()=>{
        cy.fixture("ExcersiceAutomation").then((signup)=>{
            cy.visit(signup.url)
        })
            //Verify that home page is visible successfully
            cy.get(".logo.pull-left").should("be.visible")
            //Click on 'Signup / Login' button
            //cy.get('[href="/login"]').click()
    })
    it.skip("Register page",()=>{
        cy.Register_page()
    })
    it.skip("Login User with correct email and password",()=>{
        cy.LoginCorrectEmail()
    })
    it.skip("login User with incorrect email and password",()=>{
        cy.InCorrectLogIn()
    })
    it.skip("Register User with existing email",()=>{
        cy.RegisterUserwithexistingemail()
    })
    it.skip("Contact Us From",()=>{
        cy.ContactUsForm()
    })
    it.skip("Verify Test Cases Page",()=>{
        cy.VerifyTestCasesPage()
    })
    it.skip("Verify All Products And Product Detail Page",()=>{
        cy.VerifyAllProductsAndProductDetailPage()
    })
    it.skip("Search Product",function(){
        cy.SearchProduct()
    })
    it.skip("Verify Subscription Home Page",function(){
        cy.VerifySubscriptionHomePage()
    })
    it.skip("Verify Subscription Cart Page",function(){
        cy.VerifySubscriptionCartPage()
    })
    it.skip("Add Products In Cart",function(){
        cy.AddProductsInCart()
    })
    it.skip("Verify Product Quantity In Cart",function(){
        cy.VerifyProductQuantityInCart()
    })
    it.skip("Register While Checkout",()=>{
        cy.RegisterWhileCheckout()
    })
    it("Register Before Checkout",()=>{
        cy.RegisterBeforeCheckout()
    })
    it.skip("Login Before Checkout",()=>{
        cy.LoginBeforeCheckout()
    })
    it.skip("Remove Products From Cart",()=>{
        cy.RemoveProductsFromCart()
    })
    it.skip("View Category Products",()=>{
        cy.ViewCategoryProducts()
    })
    it.skip("View Cart Brand Products",()=>{
        cy.View_CartBrandProducts()
    })
    it.skip("Search Products Verify Cart After Login",()=>{
        cy.SearchProductsVerifyCartAfterLogin()
    })
    it.skip("Add Review On Product",()=>{
        cy.AddReviewOnProduct()
    })
    it.skip("AddCart From Recommended Items",()=>{
        cy.AddCartFromRecommendedItems()
    })
    it.skip("Verify Address Details In Checkout Page",()=>{
        cy.VerifyAddressDetailsInCheckoutPage()
    })
    it.skip("Verify Address Details In Checkout Page",()=>{
        cy.VerifyAddressDetailsInCheckoutPage()
    })
    it.skip("Download Invoice After Purchase Order",()=>{
        cy.DownloadInvoiceAfterPurchaseOrder()
    })
    it.skip("Verify ScrollUp Using Arrow ScrollDown functionality",()=>{
        cy.VerifyScrollUpUsingArrowScrollDownfunctionality()
    })
    it.skip("Verify ScrollUp without Arrowbutton ScrolDown Functionality",()=>{
        cy.VerifyScrollUpwithoutArrowbuttonScrolDownFunctionality()
    })
})