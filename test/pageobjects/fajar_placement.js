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
    get mobbi(){return $('body > div.bp3-portal > div > div > div > div > div > div.menu-virtual-list > div > div:nth-child(6) > div')}
    get filterButton2(){return $('#auto_ufsr1lpse1 > div > div')}
    get dropdownfilter2() {return $('#auto_ouvc9vif54 > div > div > div.bp3-control-group.bp3-fill.sc-iMSIvx.kxHJWT > span > span > div > button > span')}
    get dropdownfilter3() {return $('#auto_yfpkzykwxb > div > div > div.bp3-control-group.bp3-fill.sc-iMSIvx.kxHJWT > span > span > div > button > span')}
    get dropdownfilter4() {return $('#auto_1ndc0m6zex > div > div > div.bp3-control-group.bp3-fill.sc-iMSIvx.kxHJWT > span > span > div > button > span')}
    get dropdownfilter5() {return $('#auto_rntzji3p1l > div > div > div.bp3-control-group.bp3-fill.sc-iMSIvx.kxHJWT > span > span > div > button > span')}
    get resname(){return $('body > div.bp3-portal > div > div > div > div > div > div.menu-virtual-list > div > div:nth-child(6)')}
    get posname(){return $('body > div.bp3-portal > div > div > div > div > div > div.menu-virtual-list > div > div:nth-child(8)')}
    get typename(){return $('body > div.bp3-portal > div > div > div > div > div > div.menu-virtual-list > div > div:nth-child(3)')}
    get statusname(){return $('body > div.bp3-portal > div > div > div > div > div > div.menu-virtual-list > div > div:nth-child(1)')}
    get buttonX1(){return $('[name="cross"]')}
    get buttonreset(){return $('#auto_vthq3wyg2s > div > div > div')}
    get buttonxfilter(){return $('#auto_sgwzylx7mt > div > div')}
    get searchfilter(){return $('body > div.bp3-portal > div > div > div > div > div > div.bp3-input-group > input')}
    get searchfound(){return $('body > div.bp3-portal > div > div > div > div > div > div.menu-virtual-list > div > div')}
    get searchfailed(){return $('body > div.bp3-portal > div > div > div > div > div > div.sc-fTrzCy.iLWzlA > a > div')}
    get closeSearch(){return $('body > div.bp3-portal > div > div > div > div > div > div.bp3-input-group > span.bp3-input-action')}
    get deleteButton(){return $('#auto_gxywc0gd39 > div > div > span > div > button')}
    get deleteButton2(){return $('#auto_l3xtpmalus > div > div > span > div > div')}
    get canceldelete(){return $('#auto_lfcmo5tdcp > div > div > span > div > div')}
    get viewdetail(){return $('#auto_0k3c5fbdqw > div > div > span > div')}
    get data1(){return $('//*[@id="tableu7dr2k7944"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div/div[6]/div[1]/div/div/div')}
    
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
    async clickDropDownFilter2(){
        await this.dropdownfilter2.click()
    }
    async clickDropDownFilter3(){
        await this.dropdownfilter3.click()
    }
    async clickDropDownFilter4(){
        await this.dropdownfilter4.click()
    }
    async clickDropDownFilter5(){
        await this.dropdownfilter5.click()
    }
    async clickResName(){
        await this.resname.click()
    }
    async clickPosName(){
        await this.posname.click()
    }
    async clickTypeName(){
        await this.typename.click()
    }
    async clickstatusname(){
        await this.statusname.click()
    }
    async clickbuttonX1(){
        await this.buttonX1.click()
    }
    async clickbuttonreset(){
        await this.buttonreset.click()
    }
    async clickbuttonXfilter(){
        await this.buttonxfilter.click()
    }
    async isisearchfilter(keyword){
        await this.searchfilter.setValue(keyword)
    }
    async clickCloseSearch(){
        await this.closeSearch.click()
    }
    async clickButtonDelete(){
        await this.deleteButton.click()
    }
    async clickButtonDelete2(){
        await this.deleteButton2.click()
    }
    async clickcanceldelete(){
        await this.canceldelete.click()
    }
    async clickviewdetail(){
        await this.viewdetail.click()
    }
    async clickdata1(){
        await this.data1.click()
    }

    async openPage(){
        await browser.url('https://timesheet.app.prosigmaka.com/user/login')
    }
}

export default new JarPlacement()