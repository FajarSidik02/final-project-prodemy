import { $,expect } from '@wdio/globals'

class JarPlacement{
    get usernameInput() {return $('input[name="username"]')}
    get passwordInput() {return $('input[name="password"]')} 
    get buttonLogin() {return $('//*[@id="root"]/div[2]/div/div/div/div[2]/form/div[3]/button')}
    get buttonAdmin() {return $('#root > section > div > div.sc-gfhzuL.cMfFWL > div > div.sc-GQHCi.lmmNTr.t--workspace-section > div.sc-kmtlux.bXecFQ > div.sc-jigNDC.gpcQed > div:nth-child(1) > div > div')}
    get buttonPlacement() {return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[2]/a')}
    get searchBar() {return $('//*[@id="tableu7dr2k7944"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[1]/div/div/input')}
    get prf1() {return $('//*[@id="tableu7dr2k7944"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div/div[1]/div[1]/div/div/div/div/span/div')}
    get xsearch() {return $('//*[@id="tableu7dr2k7944"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[1]/div/div[2]/svg/path[2]')}
    
    //action
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
    async writeSearchBar(inputansearch){
        await this.searchBar.setValue(inputansearch)
    }
    async clickXSearch(){
        await this.xsearch.click()
    }

    async openPage(){
        await browser.url('https://timesheet.app.prosigmaka.com/user/login')
    }
}

export default new JarPlacement()