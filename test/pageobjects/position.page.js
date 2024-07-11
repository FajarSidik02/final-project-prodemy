import { $, expect } from '@wdio/globals'

class PositionPage {
    //selector
    get inputEmail () {return $('input[name="username"]')}
    get inputPassword () { return $('input[name="password"]')}
    get btnSignIn () {return $('//*[@id="root"]/div[2]/div/div/div/div[2]/form/div[3]/button')}
    get btnLaunch () {return $('//*[@id="root"]/section/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div/div')}


    //expect


    //action
    async openPagePosition(){
        await browser.url('https://timesheet.app.prosigmaka.com/user/login')
    }

    async position (email, password) {
        await this.inputEmail.setValue(email)
        await this.inputPassword.setValue(password)
        await this.btnSignIn.click()
    }

    async launch () {
        await this.btnLaunch.click()
    }

}

export default new PositionPage()
