import {$,expect} from "@wdio/globals"


//
class AnaPlacement{
    get usernameInput() {return $('input[name="username"]')}
    get passwordInput() {return $('input[name="password"]')}
    get buttonLogin() {return $('//*[@id="root"]/div[2]/div/div/div/div[2]/form/div[3]/button')}
    get buttonAdmin() {return $('#root > section > div > div.sc-gfhzuL.cMfFWL > div > div.sc-GQHCi.lmmNTr.t--workspace-section > div.sc-kmtlux.bXecFQ > div.sc-jigNDC.gpcQed > div:nth-child(1) > div > div')}
    get buttonPlacement() {return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[2]/a')}
    get buttonUpdate() {return $('//*[@id="auto_mkuc2i83ax"]/div/div/span/div/button')}
    get buttonClient() {return $('//*[@id="auto_yd1rzloypv"]/div/div/div')}
    get barClient() {return $('//*[@id="auto_pg1zb47i2t"]/div/div/div[2]/div/span/span/div/input')}
    get submitClient() {return $('//*[@id="auto_sqw6um5ybr"]/div/div/div')}


    //action

    async openPage(){
        await browser.url('https://timesheet.app.prosigmaka.com/user/login')
    }

    async login(username,password){
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.buttonLogin.click()
    }

    async openTimesheet(){
        await this.buttonAdmin.click()
    }
    
    async openPlacement(){
        await this.buttonPlacement.click()
    }
    async openUpdate(){
        await this.buttonUpdate.click()
    }
    async addClient(){
        await this.buttonClient.click()
    }
    async setClient(inputClient){
        await this.barClient.setValue(inputClient)
    }
    async subClient(){
        await this.submitClient.click()
    }
}





export default new AnaPlacement()