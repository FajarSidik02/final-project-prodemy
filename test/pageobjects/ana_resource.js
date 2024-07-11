import {$,expect,browser} from "@wdio/globals"

class AnaResource{
    get usernameInput() {return $('input[name="username"]')}
    get passwordInput() {return $('input[name="password"]')}
    get buttonLogin() {return $('//*[@id="root"]/div[2]/div/div/div/div[2]/form/div[3]/button')}
    get buttonAdmin() {return $('#root > section > div > div.sc-gfhzuL.cMfFWL > div > div.sc-GQHCi.lmmNTr.t--workspace-section > div.sc-kmtlux.bXecFQ > div.sc-jigNDC.gpcQed > div:nth-child(1) > div > div')}
    get buttonResource() {return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[3]')}
    get barSearch() {return $('//*[@id="tabledl07ts8min"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[1]/div/div/input')}
    get xNip() {return $('//*[@id="tabledl07ts8min"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div/div[1]/div[1]/div/div/div/div/span/div')}
    get xNama() {return $('//*[@id="tabledl07ts8min"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div/div[1]/div[2]/div/div/div/div/span/div')}
    get buttonTrash() {return $('//*[@id="auto_lbhlwaj0l9"]/div/div/span/div/button')}
    get confirmDeleteResource() {return $('//*[@id="auto_ray82crmzd"]/div/div/div')}
    get buttonCancelDelete() {return $('[data-widgetname-cy="delete_confirm_cancel"]')}
    get xResourceList() {return $('//*[@id="auto_jqygsdepie"]/div/div/div/div/span')}
    get buttonRightNav() {return $('//*[@id="tabledl07ts8min"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[2]/div[4]')}
    get xNext() {return $('//*[@id="tabledl07ts8min"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[2]/div[3]/div')}
    get buttonLeftNav() {return $('//*[@id="tabledl07ts8min"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]')}
    get xPrevious() {return $('//*[@id="tabledl07ts8min"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[2]/div[3]/div')}
    get buttonView() {return $('[data-widgetname-cy="detail_resource_button"] button')}
    get xResourceDetail() {return $('//*[@id="auto_58xrpj18dj"]/div/div/div/div/span')}
    get buttonX() {return $('//*[@id="tabledl07ts8min"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[1]/div/div[2]')}
    get x() {return $('')}
    get x() {return $('')}
    get x() {return $('')}
    get x() {return $('')}




    //function

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
    async openResource(){
        await this.buttonResource.click()
    }
    async typeSearch(inputSearch){
        await this.barSearch.setValue(inputSearch)

    }
    async deleteResource(){
        await this.buttonTrash.click()
        await browser.pause(2000)
    }
    async confDelResource(){
        await this.confirmDeleteResource.click()
    }
    async cancelDeleteResource(){
        await this.buttonCancelDelete.click()
    }
    async nextNavigasi(){
        await this.buttonRightNav.click()
    }
    async PreviousNavigasi(){
        await this.buttonLeftNav.click()
    }
    async viewDetail(){
        await this.buttonView.click()
    }
    async xSearch(){
        await this.buttonX.click()
    }

}


export default new AnaResource()