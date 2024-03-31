// // ***********************************************
// // This example commands.js shows you how to
// // create various custom commands and overwrite
// // existing commands.
// //
// // For more comprehensive examples of custom
// // commands please read more here:
// // https://on.cypress.io/custom-commands
// // ***********************************************
// //
// //
// // -- This is a parent command --
// // Cypress.Commands.add('login', (email, password) => { ... })
// //
// //
// // -- This is a child command --
// // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// /// <reference types="Cypress" />
// import 'cypress-iframe';
// require('cypress-iframe');

/// <reference types="cypress-xpath" />
//import cypress from 'cypress';
import 'cypress-file-upload';
import sekhar from '../fixtures/RegistationData.json'
import muni from '../fixtures/ExcersiceAutomation'
import data from '../fixtures/Calender'
//import { get } from 'cypress/types/lodash';


// Cypress.Commands.add("AddProductToCart", function () {
//   cy.xpath("//a[@href='/products']").click()
//   cy.xpath("//body[1]/section[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]").click()
//   cy.xpath("//u[normalize-space()='View Cart']").click()
//   cy.xpath("//a[normalize-space()='Proceed To Checkout']").click()
//   cy.xpath("//u[normalize-space()='Register / Login']").click()
//   cy.xpath("//input[@data-qa='login-email']").type("lbqlluajqvj@gmail.com")
//   cy.xpath("//input[@placeholder='Password']").type("qpgh5mzzvno")
//   cy.xpath("//button[@data-qa='login-button']").click()
//   cy.xpath("//body[1]/section[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]").click()
//   cy.xpath("//u[normalize-space()='View Cart']").click()
//   cy.xpath("//a[normalize-space()='Proceed To Checkout']").click()
//   cy.xpath("//a[normalize-space()='Place Order']").scrollIntoView().click()

// })

// Cypress.Commands.add("alert2", () => {
//   // click for jsconform
//   cy.get("[onclick='jsConfirm()']").click()
//   // bydefault click on jsconform
//   cy.on('window:alert', (text1) => {
//     expect(text1).to.equal("I am a JS Confirm")
//   })
//   Cypress.Commands.add("alert21", () => {
//     // click for jsconform
//     cy.get("[onclick='jsConfirm()']").click()
//     // click on  cancel
//     cy.on("window:confirm", () => false)
//   })
//   Cypress.Commands.add("alert3", () => {
//     // conformalert
//     cy.window().then((text) => {
//       cy.stub(text, 'prompt').returns("sai chandu")
//       // click on jsprompt
//       cy.get("[onclick='jsPrompt()']").click()

//     })
//   })
// })
// Cypress.Commands.add("sessions", () => {
//   cy.session(("sai"), () => {
//     cy.fixture("login").then((sai) => {
//       cy.visit(sai.url)
//       cy.visit('/')
//     })
//     cy.Login()
//   })
// })
// Cypress.Commands.add("parabank", () => {
//   // Enter the firstname
//   cy.get('[id="customer.firstName"]').type(sekhar.first_name)
//   // Enter the lastname
//   cy.get('[name="customer.lastName"]').type(sekhar.last_name)
//   // Enter the adderes
//   cy.get('[type="text"]').eq(3).type(sekhar.address)
//   // Enter the city
//   cy.get('.input').eq(5).type(sekhar.city)
//   // Enter the state
//   cy.xpath("//input[@id='customer.address.state']").type(sekhar.state)
//   // Enter the Zip code
//   cy.xpath("(//input[@type='text'])[7]").type(sekhar.Zip_code)
//   // Enter the phone number
//   cy.get("[name='customer.phoneNumber']").type(sekhar.phone)
//   //cy.get("[name='customer.phoneNumber']").type(sekhar["phone_#"])           _doubt_
//   // Enter the SSN
//   cy.get("[id='customer.ssn']").type(sekhar.SSN, { log: false })
//   // Enter the user name
//   cy.get('[name="customer.username"]').type(sekhar.user_name, { log: false })
//   // Enter the password
//   cy.get('[name="customer.password"]').type(sekhar.password, { log: false })
//   // Enter the confirm
//   cy.get('[name="repeatedPassword"]').type(sekhar.confirm_password, { log: false })
//   //click on the register button
//   cy.get('[value="Register"]').click()
// })
// Cypress.Commands.add("CardDetails", function () {
//   cy.get('[data-qa="name-on-card"]').type(muni.CardName, { log: false })
//   cy.get('[name="card_number"]').type(muni.CardNumber, { log: false })
//   cy.get('[data-qa="cvc"]').type(muni.CVV, { log: false })
//   cy.get('[name="expiry_month"]').type(muni.Month, { log: false })
//   cy.get('[name="expiry_year"]').type(muni.Year, { log: false })
//   // Click 'Pay and Confirm Order' button
//   cy.get("#submit").click()
//   // Verify success message 'Your order has been placed successfully!'
//   cy.on('window:alert', (message) => {
//     expect(message).to.equal('Your order has been placed successfully!')
//   })
// })

// Cypress.Commands.add("Register_page", () => {
//   // Enter the signup page name
//   cy.get('[name="name"]').type(muni.Name)
//   // Enter the sugnup e-mail
//   cy.get("input[data-qa='signup-email']").type(muni.Email)
//   // Click on Sign up button
//   cy.get("button[data-qa='signup-button']").click()
//   //Verify ENTER ACCOUNT INFORMATION visible
//   cy.contains("Enter Account Information").should("be.visible")
//   // Select gender radio button
//   cy.get("#id_gender1").click()
//   // Enter the password
//   cy.get("#password").type(muni.Password)
//   // Click on day drop down
//   cy.get("#days").select(6)
//   // Select the month droup down 
//   cy.get("#months").select(10)
//   // Select the year droup down
//   cy.get("#years").select('2000')
//   // Enter the first name
//   cy.get("#first_name").type(muni.Fname)
//   // Enter the last name
//   cy.get("#last_name").type(muni.Lname)
//   // Enter the company name
//   cy.get("#company").type(muni.Company)
//   // Enter the address
//   cy.get("#address1").type(muni.Address1)
//   // Select the country
//   cy.get("#country").type(muni.Country)
//   // Enter the state 
//   cy.get("#state").type(muni.State)
//   // Enter the city
//   cy.get("#city").type(muni.City)
//   // Enter the zipcode
//   cy.get("#zipcode").type(muni.Zipcode)
//   // Enter the mobile number
//   cy.get("#mobile_number").type(muni.Number)
//   // Click on create account button
//   cy.get('[data-qa="create-account"]').click()
//   //Click on Continue button
//   cy.get('[data-qa="continue-button"]').click()
//   //Verify that 'Logged in as username' is visible
//   cy.contains(" Logged in as ").should("be.visible")
// })
// Cypress.Commands.add("LoginCorrectEmail", () => {
//   //Click on 'Signup / Login' button
//   cy.get('[data-qa="signup-button"]').click()
//   //Verify 'Login to your account' is visible
//   cy.contains("Login to your account").should("be.visible")
//   //Enter correct email address and password
//   cy.get('[data-qa="login-email"]').type(muni.Email, { log: false })
//   cy.get('[data-qa="login-password"]').type(muni.Password, { log: false })
//   //Click 'login' button
//   cy.get('[type="submit"]').first().click()
//   //Verify that 'Logged in as username' is visible
//   cy.contains(" Logged in as ").should("be.visible")
// })
// Cypress.Commands.add("InCorrectLogIn", () => {
//   // Click on 'Signup / Login' button
//   cy.get('[data-qa="signup-button"]').click()
//   //Verify 'Login to your account' is visible
//   cy.contains("Login to your account").should("be.visible")
//   //Enter incorrect email address and password
//   cy.get('[data-qa="login-email"]').type(muni.Email, { log: false })
//   cy.get('[data-qa="login-password"]').type(muni.Password, { log: false })
//   //Click 'login' button
//   cy.get('[type="submit"]').first().click()
//   //Verify error 'Your email or password is incorrect!' is visible
//   cy.contains("Your email or password is incorrect!").should("be.visible")
// })
// Cypress.Commands.add("RegisterUserwithexistingemail", () => {
//   //Click on 'Signup / Login' button
//   cy.get('[data-qa="signup-button"]').click()
//   //Verify 'New User Signup!' is visible
//   cy.contains("New User Signup!").should("be.visible")
//   //Enter name and already registered email address
//   cy.get('[data-qa="signup-name"]').type(muni.Name)
//   cy.get('[data-qa="signup-email"]').type(muni.Email, { log: false })
//   //Click 'Signup' button
//   cy.get('[data-qa="signup-button"]').click()
//   //Verify error 'Email Address already exist!' is visible
//   cy.contains("Email Address already exist!").should("be.visible")
// })
// Cypress.Commands.add("ContactUsForm", () => {
//   //Click on 'Contact Us' button
//   cy.get(".fa.fa-envelope").click()
//   //Verify 'GET IN TOUCH' is visible
//   cy.contains("Get In Touch").should("be.visible")
//   //Enter name, email, subject and message
//   cy.get('[name="name"]').type(muni.Name)
//   cy.get('[name="email"]').type(muni.Email, { log: false })
//   cy.get('[name="subject"]').type(muni.Subject)
//   cy.get("#message").type(muni.msg)
//   //Upload file
//   //Click 'Submit' button
//   cy.get('[data-qa="submit-button"]').click()
//   //Click OK button
//   cy.on('window:alert', (check) => {
//     expect(check).to.contains("Press OK to proceed!")
//   })
//   //Verify success message 'Success! Your details have been submitted successfully.' is visible
//   cy.contains("Success! Your details have been submitted successfully.").should("be.visible")
//   //Click 'Home' button and verify that landed to home page successfully
//   cy.get(".btn.btn-success").click()
//   cy.get(".logo.pull-left").should("be.visible")
// })
// Cypress.Commands.add("VerifyTestCasesPage", () => {
//   cy.LoginCorrectEmail()
//   //Click on 'Test Cases' button
//   cy.get(".fa.fa-list").first().click()
//   //Verify user is navigated to test cases page successfully
//   cy.url().should("include", "/test_cases")
// })
// Cypress.Commands.add("VerifyAllProductsAndProductDetailPage", () => {
//   cy.LoginCorrectEmail()
//   //Click on 'Products' button
//   cy.contains(" Products").click()
//   //Verify user is navigated to ALL PRODUCTS page successfully
//   cy.url().should("include", "/products")
//   //The products list is visible
//   cy.get(".features_items").should("be.visible")
//   //Click on 'View Product' of first product
//   cy.get(".fa.fa-plus-square").first().click()
//   //User is landed to product detail page
//   cy.url().should("include", "/product_details/1")
//   //Verify that detail detail is visible: product name, category, price, availability, condition, brand
//   cy.get(".product-information").should("be.visible")
// })
// Cypress.Commands.add("SearchProduct", () => {
//   cy.LoginCorrectEmail()
//   //Click on 'Products' button
//   cy.contains(" Products").click()
//   //Verify user is navigated to ALL PRODUCTS page successfully
//   cy.url().should("include", "/products")
//   // Enter product name in search input and click search button
//   cy.get("#search_product").type("Blue")
//   cy.get(".fa.fa-search").click()
//   // Verify 'SEARCHED PRODUCTS' is visible
//   cy.get(".features_items").should("be.visible")
//   // Verify all the products related to search are visible
//   cy.get(".features_items").should("be.visible")
// })
// Cypress.Commands.add("VerifySubscriptionHomePage", () => {
//   cy.LoginCorrectEmail()
//   //Scroll down to footer
//   cy.window().scrollTo('bottom')
//   //Verify text 'SUBSCRIPTION'
//   cy.contains("Subscription").should("be.visible")
//   //Enter email address in input and click arrow button
//   cy.get("#susbscribe_email").type(muni.Email, { log: false })
//   cy.get(".fa.fa-arrow-circle-o-right").click()
//   //Verify success message 'You have been successfully subscribed!' is visible
//   cy.contains("You have been successfully subscribed!").should("be.visible")
// })
// Cypress.Commands.add("VerifySubscriptionCartPage", () => {
//   cy.LoginCorrectEmail()
//   //Click 'Cart' button
//   cy.contains("Cart").click()
//   //Scroll down to footer
//   cy.window().scrollTo('bottom')
//   //Verify text 'SUBSCRIPTION'
//   cy.contains("Subscription").should("be.visible")
//   //Enter email address in input and click arrow button
//   cy.get("#susbscribe_email").type(muni.Email, { log: false })
//   cy.get(".fa.fa-arrow-circle-o-right").click()
//   //Verify success message 'You have been successfully subscribed!' is visible
//   cy.contains("You have been successfully subscribed!").should("be.visible")
// })
// Cypress.Commands.add("AddProductsInCart", function () {
//   cy.LoginCorrectEmail()
//   //Click 'Products' button
//   cy.contains(" Products").click()
//   //. Hover over first product and click 'Add to cart'
//   cy.get(".btn.btn-default.add-to-cart").eq(2).click()
//   //. Click 'Continue Shopping' button
//   cy.get('[data-dismiss="modal"]').click()
//   //. Hover over second product and click 'Add to cart'
//   cy.get(".btn.btn-default.add-to-cart").eq(4).click()
//   // Click 'View Cart' button
//   cy.contains("View Cart").click()
//   // Verify both products are added to Cart
//   cy.get("tbody").should("be.visible")
//   //. Verify their prices, quantity and total price
//   cy.get(".price").should("be.visible")
//   cy.get(".quantity").should("be.visible")
//   cy.get(".total").should("be.visible")
// })
// Cypress.Commands.add("VerifyProductQuantityInCart", () => {
//   cy.LoginCorrectEmail()
//   //Click 'View Product' for any product on home page
//   cy.contains("View Product").first().click()
//   // Verify product detail is opened
//   cy.url().should("include", "/product_details/1")
//   // Increase quantity to 4
//   cy.get("#quantity").clear().type("4")
//   // Click 'Add to cart' button
//   cy.get(".btn.btn-default.cart").click()
//   // Click 'View Cart' button
//   cy.contains("View Cart").click()
//   // Verify that product is displayed in cart page with exact quantity
//   cy.get(".cart_quantity").should("be.visible")
// })
// Cypress.Commands.add("RegisterWhileCheckout", () => {
//   //Add products to cart
//   cy.get(".btn.btn-default.add-to-cart").eq(2).click()
//   // Click 'Cart' button
//   cy.contains("View Cart").click()
//   // Verify that cart page is displayed
//   cy.url().should("include", "/view_cart")
//   // Click Proceed To Checkout
//   cy.contains("Proceed To Checkout").click()
//   // Click 'Register / Login' button
//   cy.get('[href="/login"]').eq(1).click()
//   // Fill all details in Signup and create account
//   cy.get('[data-qa="signup-name"]').type(muni.Name)
//   cy.get('[data-qa="signup-email"]').type(muni.Email, { log: false })
//   //Click 'Signup' button
//   cy.get('[data-qa="signup-button"]').click()
//   //Verify that 'ENTER ACCOUNT INFORMATION' is visible
//   cy.contains("Enter Account Information").should("be.visible")
//   //Fill details: Title, Name, Email, Password, Date of birth
//   cy.get(".radio").first().click()
//   cy.get("#password").type(muni.Password, { log: false })
//   cy.get("#days").select(6)
//   cy.get("#months").select(9)
//   cy.get("#years").select('2000')
//   //Select checkbox 'Sign up for our newsletter!'
//   cy.get("#newsletter").check()
//   //Select checkbox 'Receive special offers from our partners!'
//   cy.get("#optin").check()
//   //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
//   cy.get("#first_name").type(muni.Fname)
//   cy.get("#last_name").type(muni.Lname)
//   cy.get("#company").type(muni.Company)
//   cy.get("#address1").type(muni.Address1)
//   // cy.get(".form-control").eq(10).type(BattaBalla.Address2)
//   cy.get('[name="country"]').select(muni.Country)
//   cy.get('[data-qa="state"]').type(muni.State)
//   cy.get('#city').type(muni.City)
//   cy.get('[data-qa="zipcode"]').type(muni.Zipcode)
//   cy.get('#mobile_number').type(muni.Number)
//   //Click 'Create Account button'
//   cy.get(".btn.btn-default").first().click()
//   //Verify that 'ACCOUNT CREATED!' is visible
//   cy.contains("Account Created!").should("be.visible")
//   //Click 'Continue' button
//   cy.get('[data-qa="continue-button"]').click()
//   //Verify that 'Logged in as username' is visible
//   cy.contains(" Logged in as ").should("be.visible")
// })
// Cypress.Commands.add("RegisterBeforeCheckout", () => {
//   //Click on 'Signup / Login' button
//   cy.get('[href="/login"]').click()
//   cy.Register_page()
//   //Add products to cart
//   cy.get(".btn.btn-default.add-to-cart").eq(2).click()
//   // Click 'Cart' button
//   cy.contains("View Cart").click()
//   //. Verify that cart page is displayed
//   cy.url().should("include", "/view_cart")
//   //. Click Proceed To Checkout
//   cy.contains("Proceed To Checkout").click()
//   //. Verify Address Details and Review Your Order
//   cy.get('[class="col-xs-12 col-sm-6"]').should("be.visible")
//   //. Enter description in comment text area and click 'Place Order'
//   cy.get('[name="message"]').type(muni.MSG, { log: false })
//   cy.contains("Place Order").click()
//   //card details
//   cy.CardDetails()
// })
// Cypress.Commands.add("LoginBeforeCheckout", () => {
//   //Click on 'Signup / Login' button
//   cy.get('[href="/login"]').click()
//   //log in correct email
//   cy.LoginCorrectEmail()
//   //Add products to cart
//   cy.get(".btn.btn-default.add-to-cart").eq(2).click()
//   // Click 'Cart' button
//   cy.contains("View Cart").click()
//   // Verify that cart page is displayed
//   cy.url().should("include", "/view_cart")
//   //. Click Proceed To Checkout
//   cy.contains("Proceed To Checkout").click()
//   //. Verify Address Details and Review Your Order
//   cy.get('[class="col-xs-12 col-sm-6"]').should("be.visible")
//   //. Enter description in comment text area and click 'Place Order'
//   cy.get('[name="message"]').type(muni.MSG, { log: false })
//   cy.contains("Place Order").click()
//   //card details
//   cy.CardDetails()
// })
// Cypress.Commands.add("RemoveProductsFromCart", () => {
//   //Click on 'Signup / Login' button
//   cy.get('[href="/login"]').click()
//   //log in correct email
//   cy.LoginCorrectEmail()
//   //Add products to cart
//   cy.get(".btn.btn-default.add-to-cart").eq(2).click()
//   // Click 'Cart' button
//   cy.contains("View Cart").click()
//   // Verify that cart page is displayed
//   cy.url().should("include", "/view_cart")
//   // Click 'X' button corresponding to particular product
//   cy.get(".cart_quantity_delete").click()
//   // Verify that product is removed from the cart
//   cy.get("tbody").should("be.visible")
// })
// Cypress.Commands.add("ViewCategoryProducts", function () {
//   //Click on 'Signup / Login' button
//   cy.get('[href="/login"]').click()
//   //log in correct email
//   cy.LoginCorrectEmail()
//   //Verify that categories are visible on left side bar
//   cy.get(".left-sidebar").should("be.visible")
//   //Click on 'Women' category
//   cy.get('[data-toggle="collapse"]').first().click()
//   //Click on any category link under 'Women' category, for example: Dress
//   cy.contains("Dress").first().click()
//   //Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
//   cy.contains("Women - Dress Products").should("be.visible")
//   // On left side bar, click on any sub-category link of 'Men' category
//   cy.get('[data-toggle="collapse"]').eq(1).click()
//   cy.contains("Tshirts ").click()
//   //Verify that user is navigated to that category page
//   cy.url().should("include", "/category_products/3")
// })
// Cypress.Commands.add("View_CartBrandProducts", () => {
//   //Click on 'Signup / Login' button
//   cy.get('[href="/login"]').click()
//   //log in correct email
//   cy.LoginCorrectEmail()
//   //Click on 'Products' button
//   cy.get('[href="/products"]').first().click()
//   // Verify that Brands are visible on left side bar
//   cy.get(".brands_products").should("be.visible")
//   // Click on any brand name
//   cy.contains("Polo").first().click()
//   // Verify that user is navigated to brand page and brand products are displayed
//   cy.url().should("include", "/brand_products/Polo")
//   // On left side bar, click on any other brand link
//   cy.contains("Babyhug").first().click()
//   // Verify that user is navigated to that brand page and can see products
//   cy.url().should("include", "/brand_products/Babyhug")
// })
// Cypress.Commands.add("SearchProductsVerifyCartAfterLogin", () => {
//   //Click on 'Products' button
//   cy.get('[href="/products"]').first().click()
//   // Verify user is navigated to ALL PRODUCTS page successfully
//   cy.url().should("include", "/products")
//   // Enter product name in search input and click search button
//   cy.get("#search_product").type("Men Tshirt")
//   cy.get("#submit_search").click()
//   // Verify 'SEARCHED PRODUCTS' is visible
//   cy.get(".features_items").should("be.visible")
//   // Verify all the products related to search are visible
//   cy.get(".features_items").should("be.visible")
//   // Add those products to cart
//   cy.get(".fa.fa-shopping-cart").eq(1).click()
//   // Click 'Cart' button and verify that products are visible in cart
//   cy.contains("View Cart").click()
//   cy.get("#cart_info").should("be.visible")
//   //. Click 'Signup / Login' button and submit login details
//   //Click on 'Signup / Login' button
//   cy.get('.fa.fa-lock').click()
//   //log in correct email
//   cy.LoginCorrectEmail()
//   //. Again, go to Cart page
//   cy.get('[href="/view_cart"]').first().click()
//   //. Verify that those products are visible in cart after login as well
//   cy.get("#cart_info").should("be.visible")
// })
// Cypress.Commands.add("AddReviewOnProduct", () => {
//   //Click on 'Signup / Login' button
//   cy.get('[href="/login"]').click()
//   //log in correct email
//   cy.LoginCorrectEmail()
//   //Click on 'Products' button
//   cy.get('[href="/products"]').first().click()
//   //Verify user is navigated to ALL PRODUCTS page successfully
//   cy.url().should("include", "/products")
//   //Click on 'View Product' button
//   cy.get(".fa.fa-plus-square").first().click()
//   //Verify 'Write Your Review' is visible
//   cy.contains("Write Your Review").should("be.visible")
//   //Enter name, email and review
//   cy.get("#name").type(muni.Name, { log: false })
//   cy.get("#email").type(muni.Email, { log: false })
//   cy.get("#review").type(muni.review, { log: false })
//   //Click 'Submit' button
//   cy.get("#button-review").click()
//   //Verify success message 'Thank you for your review.'
//   cy.on("window:alert", (review) => {
//     expect(review).to.contain("Thank you for your review.")
//   })
// })
// Cypress.Commands.add("AddCartFromRecommendedItems", () => {
//   //Click on 'Signup / Login' button
//   cy.get('[href="/login"]').click()
//   //log in correct email
//   cy.LoginCorrectEmail()
//   //Scroll to bottom of page
//   cy.window().scrollTo('bottom')
//   //Verify 'RECOMMENDED ITEMS' are visible
//   cy.contains("recommended items").scrollIntoView().should("be.visible")
//   //Click on 'Add To Cart' on Recommended product
//   cy.get(".fa.fa-shopping-cart").eq(73).click()
//   //Click on 'View Cart' button
//   cy.contains("View Cart").click()
//   //Verify that product is displayed in cart page
//   cy.url().should("include", "/view_cart")
// })
// Cypress.Commands.add("VerifyAddressDetailsInCheckoutPage", () => {
//   //Click on 'Signup / Login' button
//   cy.get('[href="/login"]').click()
//   cy.Register_page()
//   //Add products to cart
//   cy.get(".fa.fa-shopping-cart").eq(1).click()
//   // Click 'Cart' button
//   cy.contains("View Cart").click()
//   //. Verify that cart page is displayed
//   cy.url().should("include", "/view_cart")
//   //. Click Proceed To Checkout
//   cy.contains("Proceed To Checkout").click()
//   //. Verify that the delivery address is same address filled at the time registration of account
//   cy.get(".col-xs-12.col-sm-6").eq(0).should("be.visible")
//   //. Verify that the billing address is same address filled at the time registration of account
//   cy.get(".col-xs-12.col-sm-6").eq(1).should("be.visible")
// })
// Cypress.Commands.add("VerifyAddressDetailsInCheckoutPage", () => {
//   //Click on 'Signup / Login' button
//   cy.get('[href="/login"]').click()
//   cy.Register_page()
//   //Add products to cart
//   cy.get(".fa.fa-shopping-cart").eq(1).click()
//   // Click 'Cart' button
//   cy.contains("View Cart").click()
//   //. Verify that cart page is displayed
//   cy.url().should("include", "/view_cart")
//   //. Click Proceed To Checkout
//   cy.contains("Proceed To Checkout").click()
//   //. Verify that the delivery address is same address filled at the time registration of account
//   cy.get(".col-xs-12.col-sm-6").eq(0).should("be.visible")
//   //. Verify that the billing address is same address filled at the time registration of account
//   cy.get(".col-xs-12.col-sm-6").eq(1).should("be.visible")
// })
// Cypress.Commands.add("DownloadInvoiceAfterPurchaseOrder", function () {
//   //Add products to cart
//   cy.get(".fa.fa-shopping-cart").eq(1).click()
//   // Click 'Cart' button
//   cy.contains("View Cart").click()
//   // Verify that cart page is displayed
//   cy.url().should("include", "/view_cart")
//   // Click Proceed To Checkout
//   cy.contains("Proceed To Checkout").click()
//   // Click 'Register / Login' button
//   cy.get('[href="/login"]').eq(1).click()
//   //registrestion form
//   cy.Register_page()
//   //.Click 'Cart' button
//   cy.get(".fa.fa-shopping-cart").first().click()
//   //. Click 'Proceed To Checkout' button
//   cy.contains("Proceed To Checkout").click()
//   //. Verify Address Details and Review Your Order
//   cy.get(".col-xs-12.col-sm-6").eq(0).should("be.visible")
//   cy.get('[name="message"]').type(muni.msg, { log: false })
//   //. Enter description in comment text area and click 'Place Order'
//   cy.contains("Place Order").click()
//   //. Enter payment details: Name on Card, Card Number, CVC, Expiration date
//   cy.CardDetails()
//   //. Click 'Download Invoice' button and verify invoice is downloaded successfully.
//   cy.contains("Download Invoice").click()
//   //. Click 'Continue' button
//   cy.contains("Continue").first().click()
// })
// Cypress.Commands.add("VerifyScrollUpUsingArrowScrollDownfunctionality", () => {
//   //Click on 'Signup / Login' button
//   cy.get('[href="/login"]').click()
//   //log in correct email
//   cy.LoginCorrectEmail()
//   //Scroll down page to bottom
//   cy.scrollTo("bottom")
//   //Verify 'SUBSCRIPTION' is visible
//   cy.contains("Subscription").scrollIntoView().should("be.visible")
//   //Click on arrow at bottom right side to move upward
//   cy.get(".fa.fa-angle-up").click()
//   //Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
//   cy.get(".logo.pull-left").should("be.visible")
// })

// Cypress.Commands.add("VerifyScrollUpwithoutArrowbuttonScrolDownFunctionality", () => {
//   //Click on 'Signup / Login' button
//   cy.get('[href="/login"]').click()
//   //log in correct email
//   cy.LoginCorrectEmail()
//   //Scroll down page to bottom
//   cy.scrollTo("bottom")
//   //Verify 'SUBSCRIPTION' is visible
//   cy.contains("Subscription").scrollIntoView().should("be.visible")
//   // Scroll up page to top
//   cy.scrollTo("top")
//   // Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
//   cy.get(".logo.pull-left").should("be.visible")
// })
// Cypress.Commands.add("OnwardFlightTicket", () => {
//   cy.get(".form-control.form-control-lg.form-control").eq(0).type(data.From)
//   cy.get(".form-control.form-control-lg.form-control").eq(1).type(data.To)
//   cy.get(".form-control.form-control-lg.form-control").eq(2).clear().type(data.When)
//   cy.get(".btn.btn-primary.btn-lg.btn-block").click()
//   cy.wait(4000)
//   cy.get('[type="button"]').eq(1).click()
//   cy.get("#firstName").type(data.Fname)
//   cy.get("#familyName").type(data.Lname)
//   cy.get("#email").type(data.Email)
//   cy.get("#agree_to_terms").click()
//   cy.get('[type="submit"]').eq(1).click()
//   // cy.get("#jsx-iframe-3bf8076307").scrollIntoView().then((iframe)=>{
//   //let test=iframe.contents().find(".paypal-button-text.true")
//   //cy.wrap(test).click()
// })
// // })
