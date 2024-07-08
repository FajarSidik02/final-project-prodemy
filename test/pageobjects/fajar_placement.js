import { $,expect } from '@wdio/globals'

class JarPlacement{
    get usernameInput() {return $('input[name="username"]')}
    get passwordInput() {return $('input[name="password"]')} 
    get buttonLogin() {return $('//*[@id="root"]/div[2]/div/div/div/div[2]/form/div[3]/button')}
    get buttonAdmin() {return $('#root > section > div > div.sc-gfhzuL.cMfFWL > div > div.sc-GQHCi.lmmNTr.t--workspace-section > div.sc-kmtlux.bXecFQ > div.sc-jigNDC.gpcQed > div:nth-child(1) > div > div')}
    get buttonPlacement() {return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[2]/a')}
    get searchBar() {return $('//*[@id="tableu7dr2k7944"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[1]/div/div/input')}
    get prf1() {return $('//*[@id="tableu7dr2k7944"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div/div[1]/div[1]/div/div/div/div/span/div')}
    get xsearch() {return $('//*[@id="tableu7dr2k7944"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[1]/div/div[2]')}
    get filterButton(){return $('//*[@id="auto_jw689k3r2f"]/div')}
    get dropdownFilter1(){return $('//*[@id="auto_x99z2etafj"]/div/div/div[2]/span/span/div/button/span')}
    get mobbi(){return $('/html/body/div[7]/div/div/div/div/div/div[2]/div/div[6]/div/a/div')}
    get filterButton2(){return $('//*[@id="auto_ufsr1lpse1"]/div/div/div/button')}
    
    
    
    
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
    async clickFilterButton(){
        await this.filterButton.click()
    }
    async clickDropDownFilter1(){
        await this.dropdownFilter1.click()
    }
    async clickMobbi(){
        await this.mobbi.click()
    }
    async clickFilterButton2(){
        await this.filterButton2.click()
    }

    async openPage(){
        await browser.url('https://timesheet.app.prosigmaka.com/user/login')
    }
}

export default new JarPlacement()