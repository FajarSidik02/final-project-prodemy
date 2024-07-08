import { $, expect } from '@wdio/globals'


class LoginPage {
    //selector
    get inputEmail () {return $('input[name="username"]')}
    get inputPassword () { return $('input[name="password"]')}
    get btnSignIn () {return $('//*[@id="root"]/div[2]/div/div/div/div[2]/form/div[3]/button')}
    get account () { return $ ('//*[@id="radix-1"]')}
    get signOut () {return $ ('//*[@id="radix-3"]/div[4]')}
    get timesheetAdmin (){return $('//*[@id="root"]/section/div/div[2]/div/div[1]/div[1]/div[1]/span/div/span')}
    get errorLogin() {return $('//*[@id="root"]/div[2]/div/div/div/div[2]/div[2]/span')}
    get noValid() {return$('//*[@id="root"]/div[2]/div/div/div/div[2]/form/div[1]/div/div/div/span')}

    
    //action
    async openPage(){
        await browser.url('https://timesheet.app.prosigmaka.com/user/login')
    }
    async login (email, password) {
        await this.inputEmail.setValue(email)
        await this.inputPassword.setValue(password)
        await this.btnSignIn.click()
    }

    async logout(){
        await this.account.click()
        await this.signOut.click()
    }

}

export default new LoginPage()
