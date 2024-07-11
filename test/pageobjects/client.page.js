import { $, expect } from '@wdio/globals'

class ClientPage {
    // selector
    get inputEmail () {return $('input[name="username"]')}
    get inputPassword () { return $('input[name="password"]')}
    get btnSignIn () {return $('//*[@id="root"]/div[2]/div/div/div/div[2]/form/div[3]/button')}
    get btnLaunch () {return $('//*[@id="root"]/section/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div/div')}
    get clientList () {return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[4]/a')}
    get btnNewClient () { return $('//*[@id="auto_vsfyn04gas"]/div/div/div')}
    get btnCancelClient () { return $('//*[@id="auto_0xceb4nob2"]/div/div/div')}
    get addNewClient () { return $ ('//*[@id="auto_xzzwcgvr6l"]/div/div/div[2]/div/span/span/div/input')}
    get btnSubmitClient () { return $ ('//*[@id="auto_4905b1pi19"]/div/div/div')}
    get bambang () { return $ ('//*[@id="tabley4oky2h835"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div/div[3]/div/div/div/div/div/span/div')}
    get btnUpdate () {return $ ('//*[@id="auto_pag3gykm5e"]/div/div/span/div/button')}
    get inputUpdate () {return $ ('//*[@id="auto_5vysyagp48"]/div/div/div[2]/div/span/span/div/input')}
    get btnSubmitUpdate () {return $ ('//*[@id="auto_5wmgaw43nc"]/div/div/div')}
    get btnCancelUpdate () {return $ ('//*[@id="auto_wt6zztqh1g"]/div/div/div')}
    get kolomAstra () {return $ ('//*[@id="tabley4oky2h835"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div/div[1]/div/div/div/div/div/span/div')}
    get isiAstra () {return $ ('//*[@id="auto_5vysyagp48"]/div/div/div[2]/div/span/span/div/input')}
    get btnNext () {return $ ('//*[@id="tabley4oky2h835"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[2]/div[4]')}
    get btnBefore () {return $ ('//*[@id="tabley4oky2h835"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]')}
    get kolomEcomindo () {return $ ('//*[@id="tabley4oky2h835"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div/div[5]/div/div/div/div/div')}
    get btnDelete () { return $ ('//*[@id="auto_djlc3il0kw"]/div/div/span/div/button')}
    get btnCancelDelete () {return $ ('//*[@id="auto_50hv948fxl"]/div/div/div/button')}
    get btnYesDelete () {return $ ('//*[@id="auto_yivb1ifo58"]/div/div/div/button')}
    get search () {return $ ('//*[@id="tabley4oky2h835"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[1]/div/div/input')}
    get silangSearch () {return $ ('//*[@id="tabley4oky2h835"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[1]/div/div[2]')}
    get btnView () {return $ ('//*[@id="auto_z0mptk294t"]/div/div/span/div/button')}
    get btnViewSelected () {return $ ('//*[@id="auto_ijppf7mipb"]/div/div/span/div/button')}
    get btnBackPlacement () {return $ ('//*[@id="auto_qsvx1ng2nw"]/div/div/div')}
    get btnBackClient () {return $ ('//*[@id="auto_9cbyi64rde"]/div/div/div')}
    get kotakName() {return $ ('//*[@id="tabley4oky2h835"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[1]/div/div/div[1]')}
    get allNameClient () {return $$ ('//div[@role="rowgroup"]/div/div/div/div/div/div/span/div')}


    //expect
    get timeSheetAdmin () {return $('//*[@id="header-root"]/div/div/div[1]/div[1]/div/div')}
    get created () { return $ ('//*[@id="tabley4oky2h835"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div/div[1]/div/div/div/div/div/span/div')}
    get popUpRegistered () { return $ ('//*[@id="ToastId44"]')}
    get halamanAwal () { return $ ('//*[@id="tabley4oky2h835"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[2]/div[3]')}
    get halamanNext () { return $ ('//*[@id="tabley4oky2h835"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[2]/div[3]')}


    //action
    async openPageClient(){
        await browser.url('https://timesheet.app.prosigmaka.com/user/login')
    }

    async client (email, password) {
        await this.inputEmail.setValue(email)
        await this.inputPassword.setValue(password)
        await this.btnSignIn.click()
    }

    async launch () {
        await this.btnLaunch.click()
    }

    async OpenClientList () {
        await this.clientList.click()
    }

    async newClient(){
        await this.btnNewClient.click()
    }

    async cancelNewClient() {
        await this.btnCancelClient.click()
    }

    async inputNewClient (input){
        await this.addNewClient.addValue(input)
    }

    async submitClient () {
        await this.btnSubmitClient.click()
    }

    async kolomBambang () {
        await this.bambang.click()
    }

    async klikUpdate () {
        await this.btnUpdate.click()
    }

    async updateBambang (inputUpdated) {
        await this.inputUpdate.addValue(inputUpdated)
    }

    async submitUpdate () {
        await this.btnSubmitUpdate.click()
    }

    async klikCancelUpdate () {
        await this.btnCancelUpdate.click()
    }

    // async klikAstra () {
    //     await this.kolomAstra.click()
    // }

    async clearAstra () {
        await this.isiAstra.clearValue()
    }

    async setAstra () {
        await this.isiAstra.setValue('Astra')
    }

    async navigasiNext () {
        await this.btnNext.click()
    }

    async navigasiBack () {
        //await this.btnNext.click()
        await this.btnBefore.click()
    }

    async klikEcomindo () {
        await this.kolomEcomindo.click()
    }

    async klikDelete () {
        await this.btnDelete.click()
    }

    async klikCancelDelete () {
        await this.btnCancelDelete()
    }

    async klikYesDelete () {
        await this.btnYesDelete.click()
    }

    async inputSearch (inputSearch) {
        await this.search.setValue(inputSearch)
    }

    async getAllName () {
        let hasil = []
        let allName = await this.allNameClient
        for (let i of allName) {
            let nama = await i.getText()
            hasil.push(nama)
        }
        return hasil
    }
    

    async klikSilangSearch () {
        await this.silangSearch.click()
    }

    async klikBtnView () {
        await this.btnView.click()
    }

    async klikBtnViewSelected () {
        await this.btnViewSelected.click()
    }

    async klikBtnBackPlacement () {
        await this.btnBackPlacement.click()
    }

    async klikBtnBackClient () {
        await this.btnBackClient.click()
    }

    async klikKolomNameDesc () {
        await this.kotakName.click()
    }

    async klikKolomNameAsc () {
        await this.kotakName.click()
    }
}

export default new ClientPage()
