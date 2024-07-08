import { $,expect } from '@wdio/globals'

class JarPlacement{
    get usernameInput() {return $('[name = "username"]')}
    get passwordInput() {return $('[name = "password"]')} 
    get buttonLogin() {return $('//*[@id="root"]/div[2]/div/div/div/div[2]/form/div[3]/button')}


    //action
    async login(username,password){
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.buttonLogin.click()
    }


    async openPage(){
        await browser.url('https://timesheet.app.prosigmaka.com/user/login')
    }
}

export default new JarPlacement()