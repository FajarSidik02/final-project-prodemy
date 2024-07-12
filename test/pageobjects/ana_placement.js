import {$,expect,browser} from "@wdio/globals"


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
    get buttonXClient() {return $('//*[@id="auto_akm5vtg2zw"]/div/div/button/span')}
    get buttonPosition() {return $('//*[@id="auto_rj2yq2hpbw"]/div/div')}
    get barPosition() {return $('//*[@id="auto_i1m1ofktsv"]/div/div/div[2]/div/span/span/div/input')}
    get submitPosition() {return $('[data-widgetname-cy="SubmitModalPositionButton"]')}
    get buttonCancelPosition() {return $('//*[@id="auto_kgwh91i1xr"]/div/div/div')}
    get buttonBackPlacement() {return $('//*[@id="auto_i1gvalze90"]/div/div/div')}
    get buttonNewPlacement() {return $('//*[@id="auto_25duoulbey"]/div/div/div')}
    get buttonCancelNewPlacement() {return $('[data-widgetname-cy="CancelButton"]')}
    get xPlacementList() {return $('//*[@id="auto_3pwsppo3a6"]/div/div/div/div/span')}
    // get addResourceName() {return $('[data-widgetname-cy="ResourceNameInput"] input')}
    // get addResourceNIP() {return $('//*[@id="auto_iwnjvnoeb6"]/div/div/div[2]/div/span/span/div/input')}
    // get startResourceDate() {return $('//*[@id="auto_7p8alqmjyd"]/div/div/div[2]/div/span/span/span/span/div/input')}
    // get pickStarDate() {return $('/html/body/div[6]/div/div/div/div[2]/div/div/div/div[1]/div/div[2]/div/div[3]/div[1]/div[3]/div')}
    // get endResourceDate() {return $('//*[@id="auto_1imj9wywey"]/div/div/div[2]/div/span/span/span/span/div/input')}
    // get pickEndDate() {return $('/html/body/div[7]/div/div/div/div[2]/div/div/div/div[1]/div/div[2]/div/div[3]/div[5]/div[4]/div')}
    get buttonAddClientNP() {return $('//*[@id="auto_qcylho60d5"]/div/div/div')}
    get barClientNP() {return $('//*[@id="auto_ruet2920ea"]/div/div/div[2]/div/span/span/div/input')}
    get submitClientNP() {return $('//*[@id="auto_s8kjxpirna"]/div/div/div')}
    get buttonXClientNP() {return $('[data-widgetname-cy="IconButton3"] button')}
    get xNewPlacement() {return $('//*[@id="auto_mejlryol52"]/div/div/div/div/span')}
    get buttonAddPositionNP() {return $('//*[@id="auto_ocgaqjyl9v"]/div/div/div')}
    get barPositionNP() {return $('[data-widgetname-cy="PositionNameInput"] input')}
    get submitPositionNP() {return $('//*[@id="auto_2eyo96mp6x"]/div/div/div')}
    get buttonXPositionNP() {return $('//*[@id="auto_9nhq0lcg8n"]/div/div/button')}
    get buttonBackNewPlacement() {return $('//*[@id="auto_5shfrkint7"]/div/div/div')}
    get x() {return $('')}
    get x() {return $('')}
    get x() {return $('')}
    get x() {return $('')}
    get x() {return $('')}
    get x() {return $('')}




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
    async xClient(){
        await this.buttonXClient.click()
    }
    async addPosition(){
        await this.buttonPosition.click()
    }
    async setPosition(inputPosition){
        await this.barPosition.setValue(inputPosition)
    }
    async subPosition(){
        await this.submitPosition.click()
    }
    async cancelPosition(){
        await this.buttonCancelPosition.click()
    }
    async backPlacement(){
        await this.buttonBackPlacement.click()
    }
    async newPlacementPage(){
        await this.buttonNewPlacement.click()
    }
    async cancelNewPlacementPage(){
        await this.buttonCancelNewPlacement.click()
    }
    async addClientNP(){
        await this.buttonAddClientNP.click()
    }
    async setClientNP(inputClientNP){
        await this.barClientNP.setValue(inputClientNP)
    }
    async subClientNP(){
        await this.submitClientNP.click()
    }
    async xClientNP(){
        await this.buttonXClientNP.click()
    }

    async addPositionNP(){
        await this.buttonAddPositionNP.click()
    }
    async setPositionNP(inputPositionNP){
        await this.barPositionNP.setValue(inputPositionNP)
    }
    async subPositionNP(){
        await this.submitPositionNP.click()
    }
    async xPositionNP(){
        await this.buttonXPositionNP.click()
    }
    async backNewPlacement(){
        await this.buttonBackNewPlacement.click()
    }

}





export default new AnaPlacement()