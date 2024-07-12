import { $, expect } from '@wdio/globals'

class PositionPage {
    //selector
    get inputEmail () {return $('input[name="username"]')}
    get inputPassword () {return $('input[name="password"]')}
    get btnSignIn () {return $('//*[@id="root"]/div[2]/div/div/div/div[2]/form/div[3]/button')}
    get btnLaunch () {return $('//*[@id="root"]/section/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div/div')}
    get positionList () {return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[5]/a')}
    get newPosition () {return $('//*[@id="auto_vsfyn04gas"]/div/div/div')}
    get cancelNewPosition () {return $('//*[@id="auto_0xceb4nob2"]/div/div/div')}
    get addPosition () {return $('//*[@id="auto_xzzwcgvr6l"]/div/div/div[2]/div/span/span/div/input')}
    get btnSubmitNewPosition () {return $('//*[@id="auto_4905b1pi19"]/div/div/div')}
    get btnUpdate () {return $('//*[@id="auto_pag3gykm5e"]/div/div/span/div')}
    get btnCancelUpdate () {return $('//*[@id="auto_wt6zztqh1g"]/div/div/div')}
    get inputUpdate () {return $('//*[@id="auto_5vysyagp48"]/div/div/div[2]/div/span/span/div/input')}
    get btnSubmitUpdate () {return $('//*[@id="auto_5wmgaw43nc"]/div/div/div')}
    get kolomAndroid () {return $('//*[@id="tablel4feo0hjff"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div/div/span/div')}
    get kolomSystemAnalys () {return $('//*[@id="tablel4feo0hjff"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div/div[9]/div[1]/div/div/div/div/span')}
    get btnDelete () {return $('//*[@id="auto_djlc3il0kw"]/div/div/span/div')}
    get btnCancelDelete () {return $('//*[@id="auto_50hv948fxl"]/div/div/div')}
    get btnYesDelete () {return $('//*[@id="auto_yivb1ifo58"]/div/div/div')}
    get btnNext () {return $('//*[@id="tablel4feo0hjff"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[2]/div[4]')}
    get btnBack () {return $('//*[@id="tablel4feo0hjff"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]')}



    //expect
    get kolomDataScientist () {return $('//*[@id="tablel4feo0hjff"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div/div[4]/div[1]/div/div/div/div/span/div')}
    get halamanAwal () {return $('//*[@id="tablel4feo0hjff"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[2]/div[3]')}
    get halamanNext () {return $('//*[@id="tablel4feo0hjff"]/div[1]/div[1]/div[2]/div/div/div/div/div/div[2]/div[3]')}


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

    async klikOpenPositionList () {
        await this.positionList.click()
    }

    async klikNewPosition () {
        await this.newPosition.click()
    }

    async klikCancelNewPosition () {
        await this.cancelNewPosition.click()
    }

    async inputNewPosition (input){
        await this.addPosition.addValue(input)
    }

    async klikBtnSubmitPosition () {
        await this.btnSubmitNewPosition.click()
    }

    async klikKolomData () {
        await this.kolomDataScientist.click()
    }

    async klikBtnUpdate () {
        await this.btnUpdate.click()
    }

    async klikBtnCancel () {
        await this.btnCancelUpdate.click()
    }

    async updatePosition (input) {
        await this.inputUpdate.addValue(input)
    }

    async klikBtnSubmit () {
        await this.btnSubmitUpdate.click()
    }

    async klikKolomAndroid () {
        await this.kolomAndroid.click()
    }

    async clearAndroid () {
        await this.inputUpdate.clearValue()
    }

    async setAndroid () {
        await this.inputUpdate.setValue('Android')
    }

    async klikKolomSystem () {
        await this.kolomSystemAnalys.click()
    }

    async klikBtnDelete () {
        await this.btnDelete.click()
    }

    async klikBtnCancelDelete () {
        await this.btnCancelDelete.click()
    }

    async klikBtnYesDelete () {
        await this.btnYesDelete.click()
    }

    async klikBtnNext () {
        await this.btnNext.click()
    }

    async klikBtnBack () {
        await this.btnBack.click()
    }



}

export default new PositionPage()
