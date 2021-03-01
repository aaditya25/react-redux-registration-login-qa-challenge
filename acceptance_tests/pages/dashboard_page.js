import {Selector,t} from 'testcafe'

class dashboard_page{
    constructor(){
        //Selectors
        this.login_sucess = Selector('#app > div > div > div > div > p:nth-child(2)')
        this.delete_user = Selector('#app > div > div > div > div > ul > li > span')
        this.delete = Selector('.col-md-offset-3')
        this.logout = Selector('#app > div > div > div > div > p:nth-child(5) > a')
 
    }
}export default dashboard_page