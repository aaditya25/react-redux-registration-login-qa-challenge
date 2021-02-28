import {Selector,t} from 'testcafe'

class registration_page{
    constructor(){
        //Selectors
        this.reg_button = Selector('.btn-link')
        this.register = Selector('#app > div > div > div > div > h2')
        this.firstname = Selector('[name="firstName"]')
        this.lastname = Selector('[name="lastName"]')
        this.username = Selector('[name="username"]')
        this.password = Selector('[name="password"]')
        this.submit_button = Selector('.btn-primary')
    }
    async registration(fname,lname,uname,pass){
        await t
        .click(this.reg_button)
        .typeText(this.firstname, fname,{replace: true})
        .typeText(this.lastname, lname,{replace: true})
        .typeText(this.username, uname,{replace: true})
        .typeText(this.password, pass,{replace: true})
        .click(this.submit_button)
    }
}export default registration_page