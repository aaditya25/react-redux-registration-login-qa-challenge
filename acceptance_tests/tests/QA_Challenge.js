import {Selector, t} from 'testcafe'
import xPathToCss from 'xpath-to-css'
import loginpage from '../Pages/login_page'
import registration_page from '../Pages/registration_page'
import dashboard_page from '../Pages/dashboard_page'
const login_page = new loginpage()
const registrationpage = new registration_page()
const dashboardpage = new dashboard_page()

fixture `Tests for User login form`
.page('http://localhost:8080/')

.beforeEach(async t=>{
     //Runs before each test
    await t.setTestSpeed(0.5)
    await t.maximizeWindow()
    await t.setPageLoadTimeout(0)
    await t.wait(100)
 }) 

//Tests for user registration
test(`A User can register in order to be able to login to the application`,async t=>
{
//Routing to the registration page
await t.click(login_page.register)

//Assertion for checking if user has been directed to registration page
await t.expect(registrationpage.register.innerText).contains('Register')
// assertion for getpage url refer testcafe doc for client function

//Filling out the registration form
<<<<<<< Updated upstream
await t.typeText(registrationpage.firstname,'Aditya')
=======
await t.typeText(registrationpage.firstname,'Adi')
>>>>>>> Stashed changes
await t.typeText(registrationpage.lastname,'Chaudhari')
await t.typeText(registrationpage.username,'Adi')
await t.typeText(registrationpage.password,'Password@123')

//Submitting a successful registration
await t.click(registrationpage.submit_button)

//Assertion for checking if user has been registered successfully
await t.expect(login_page.reg_sucess.innerText).contains('Registration successful')
})


//Tests for login with invalid credentials
test(`Submitting login form with invalid credentials`,async t=>
{
registrationpage.registration('Aditya','Chaudhari','Adi','Password@123')

//Filling out of login form
await t.typeText(registrationpage.username,'Invalid')
await t.typeText(registrationpage.password,'Password@123')
await t.click(login_page.loginbutton)
await t.wait(100)

//Assertion for checking if user has received an error message after enting invalid credentials
await t.expect(login_page.loginerror.innerText).contains('Username or password is incorrect')

})


//Tests for login with valid credentials
test(`Submitting login form with valid credentials`,async t=>
{
registrationpage.registration('Aditya','Chaudhari','Adi','Password@123')

//Filling out of login form
await t.typeText(registrationpage.username,'Adi')
await t.typeText(registrationpage.password,'Password@123')
await t.click(login_page.loginbutton)
await t.wait(100)

//Assertion for checking if user is directed to homepage after enting valid credentials
await t.expect(dashboardpage.login_sucess.innerText).contains("You're logged in with React!!")
})

//Test for Delete user profile functionality
test(`Deleting a user`,async t=>
{
//Register User
registrationpage.registration('Aditya','Chaudhari','Adi','Password@123')

//Login with registered user
login_page.login('Adi','Password@123')

//Finding the delete button
await t.click(dashboardpage.delete_user)

//Assertion for checking if deletion is possible
await t.expect(dashboardpage.delete.innerText).notContains('Delete')
})


//Test for Logout functionality
test(`Logging out of the application`,async t=>
{
//Register User
registrationpage.registration('Aditya','Chaudhari','Adi','Password@123')

//Login with registered user
login_page.login('Adi','Password@123')

//Finding the Logout button
await t.click(dashboardpage.logout)

//Assertion if user is redirected to login page after clicking on logout option
await t.expect(login_page.logintext.innerText).contains('Login')
})
