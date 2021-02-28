import {Selector,t} from 'testcafe'

class loginpage{
    constructor(){
        //Selectors
        this.user_name = Selector('[name="username"]')
        this.password = Selector('[name="password"]')
        this.loginbutton = Selector('.btn-primary')
        this.loginerror = Selector('.alert-danger')
        this.register = Selector('.btn-link')
        this.reg_sucess = Selector('.alert-success')
        this.logintext = Selector('#app > div > div > div > div > h2')
    }
    async login(uname, pass){
        await t
        .typeText(this.user_name, uname,{replace: true})
        .typeText(this.password, pass,{replace: true})
        .click(this.loginbutton)
    }
}export default loginpage