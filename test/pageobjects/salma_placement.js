class Placement2 {
get inputEmail () {return $('input[name="username"]')}
get inputPassword () { return $('input[name="password"]')}
get btnSignIn () {return $('//*[@id="root"]/div[2]/div/div/div/div[2]/form/div[3]/button')}

get timesheetAdmin (){return $('#root > section > div > div.sc-gfhzuL.cMfFWL > div > div.sc-GQHCi.lmmNTr.t--workspace-section > div.sc-kmtlux.bXecFQ > div.sc-jigNDC.gpcQed > div:nth-child(1) > div > div')}
get placementBtn(){ return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[2]/a')}
get dataUser(){return $('[data-rowindex="1"]')}
get detailIcon (){ return $('#auto_0k3c5fbdqw')};

get filterBtn (){return $('#auto_qui9zydxo6')}
get startField (){return $('#auto_k5ffyfwp82 > div > div > div.sc-cTcUcm.giBtmE')}
get monthDropdown(){return $('.bp3-html-select.bp3-minimal.bp3-datepicker-month-select > select')}
get labelMonth(){return $('[label="June"]')}
get startDate(){return $('[aria-label="Wed Jun 26 2024"]')}
get endField(){return $('#auto_5htwofskwt > div > div > div.sc-cTcUcm.giBtmE')}
get endDate(){return $('[aria-label="Fri Jun 28 2024"]')}
get filterModal (){ return $('[data-widgetname-cy="SubmitFilter"]')}
get xFilter(){ return $('[data-widgetname-cy="IconButton1"')}
get txtFilter(){ return $('.sc-iDmqZj.jdrGRt.td')}

get resetFilter(){return $('.sc-jLobnj.leTMVt')}
get txtResetFIlter(){return $('.sc-fxUKZP.hxkdvZ')}

get detailTR(){return $('#auto_i4ju791j0n > div > div > span > div > button')};
get txtTimesheetDetail(){return $('#auto_gdt4faci21 > div > div > div > div > span')}

get backTD(){return $('[data-widgetname-cy="back_button"]')}
get txtBack(){return $('[data-widgetname-cy="Title"]')}

get printIcon(){return $('#auto_p8iwwpitf5 > div > div > button')}
get printBtn(){return $('[data-widgetname-cy="submit_print_button"]')}
get startPrint(){return $('#auto_l3vj0y7lif > div > div > div.sc-cTcUcm.giBtmE')}
get endPrint(){return $('#auto_rpqo36kli9 > div > div > div.sc-cTcUcm.giBtmE')}
get txtPrint(){return $('#ToastId2314')}

get cancelPrint(){return $('#auto_qqj953m29c > div > div > div')}
get modalPrint(){return $('#root > div.sc-dSLGUj.fKTMqL > section > section > div > div > div > div > div > div.sc-bmhXnO.iIpWJw.auto-layout-layer-0-2 > div.sc-eLdnOn.sc-fyJLnQ.jPsBDi.hxbasM > div > div > div > div > div > div > div.bp3-overlay-content.bp3-overlay-appear-done.bp3-overlay-enter-done')}

get navRight(){return $('#tablezx8uhytssd > div:nth-child(1) > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div > div > div.sc-ewcqwX.gHknCu.t--table-widget-next-page > span > svg')}
get txt2(){return $('#tablezx8uhytssd > div:nth-child(1) > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div > div > div.sc-ewcqwX.gHknCu.page-item')}
get navLeft(){return $('#tablezx8uhytssd > div:nth-child(1) > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div > div > div.sc-ewcqwX.gHknCu.t--table-widget-prev-page > span')}
get txt1(){return $('#tablezx8uhytssd > div:nth-child(1) > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div > div > div.sc-ewcqwX.gHknCu.page-item')}

get editIcon(){return $('#auto_mkuc2i83ax > div > div > span > div > button')}

get resourceName(){return $('#auto_ehlw8i9j8r > div > div > div.bp3-control-group.bp3-fill.sc-iMSIvx.kxHJWT > span > span > div > button > span')}
get chooseName(){return $('body > div.bp3-portal > div > div > div > div > div > div.menu-virtual-list > div > div:nth-child(1)')}
get searchName(){return $('body > div.bp3-portal > div > div > div > div > div > div.bp3-input-group > input')}
get realName(){return $('body > div.bp3-portal > div > div > div > div > div > div.menu-virtual-list > div > div > div > a > div')}

get clientName(){return $('#auto_uz361p0nth > div > div > div.bp3-control-group.bp3-fill.sc-iMSIvx.kxHJWT > span > span > div > button > span')}
get chooseClient(){return $('body > div.bp3-portal > div > div > div > div > div > div.menu-virtual-list > div > div:nth-child(1)')}
get searchClient(){return $('body > div.bp3-portal > div > div > div > div > div > div.bp3-input-group > input')}
get realClient(){return $('body > div.bp3-portal > div > div > div > div > div > div.menu-virtual-list > div > div:nth-child(1)')}


get PRFDate(){return $('#auto_o6fh9oni0g > div > div > div.sc-cTcUcm.giBtmE > div > span > span > span > span > div > input')}
get txtPRFDate(){return $('#auto_1msa0btt0h > div > div > div > div > span')}

get positionName(){return $('#auto_f8exp8zqeb > div > div > div.bp3-control-group.bp3-fill.sc-iMSIvx.kxHJWT > span > span > div > button > span')}
get choosePosition(){return $('body > div.bp3-portal > div > div > div > div > div > div.menu-virtual-list > div > div:nth-child(2) > div > a')}
get realPosition(){return $('body > div.bp3-portal > div > div > div > div > div > div.menu-virtual-list > div > div:nth-child(1) > div > a')}
get txtPosition(){return $('#auto_ptfj1sjccg > div > div > div > div > span')}

get placementLoc(){return $('#auto_8g8e0dekfr > div > div > div.sc-cqQeAO.iNAMSZ.text-input-wrapper > div > span > span > div > input')}
get txtPlacementLoc(){return $('#auto_gq7hu1i6qt > div > div > div > div > span')}

get type(){return $('#auto_voaoxorjtv > div > div > div.bp3-control-group.bp3-fill.sc-iMSIvx.kxHJWT > span > span > div > button')}
get chooseType(){return $('body > div.bp3-portal > div > div > div > div > div > div.menu-virtual-list > div > div:nth-child(1) > div > a')}
get txtType(){return $('#auto_h3wsa1e3ja > div > div > div > div > span')}

get status(){return $('#auto_staeift9md > div > div > div.bp3-control-group.bp3-fill.sc-iMSIvx.kxHJWT > span > span > div > button')}
get chooseStatus(){return $('body > div.bp3-portal > div > div > div > div > div > div.menu-virtual-list > div > div:nth-child(1) > div > a > div')}
get txtStatus(){return $('#auto_jnboqzapw4 > div > div > div > div > span')}

get dateReturn(){return $('#auto_glqj69f6b4 > div > div > div.sc-cTcUcm.giBtmE')}
get txtReturnDate(){return $('#auto_eg5c7m37pl > div > div > div > div > span')}

get returnReason(){return $('#auto_x43i3gmlym > div > div > div.sc-cqQeAO.iNAMSZ.text-input-wrapper > div > span > span > div > input')}
get txtReturnReason(){return $('#auto_667vzisklu > div > div > div > div > span')}

get submitUpdate(){return $('[data-widgetname-cy="SubmitButton"]')}
get txtNameUpdate(){return $('#tableu7dr2k7944 > div.tableWrap.virtual > div > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.sc-jTtXpN.lesyOX.tbody.body > div > div.tr.selected-row.t--virtual-row > div:nth-child(3) > div > div > div')}
get txtClientUpdate(){return $('#tableu7dr2k7944 > div.tableWrap.virtual > div > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.sc-jTtXpN.lesyOX.tbody.body > div > div.tr.selected-row.t--virtual-row > div:nth-child(2) > div > div > div')}

get cancelUpdate(){return $('#auto_53d888vnwy > div > div > div')}
get txtCancel(){return $('#auto_3pwsppo3a6 > div > div > div > div > span')}



async openPage(){
    await browser.url('https://timesheet.app.prosigmaka.com/user/login')
}  

async login (email, password) {
    await this.inputEmail.setValue(email)
    await this.inputPassword.setValue(password)
    await this.btnSignIn.click()
}

async clickTimesheet(){
    this.timesheetAdmin.click()
}
async placementDetail(){
    await this.placementBtn.click();
    await browser.pause(6000)
    await this.dataUser.click()
    await this.detailIcon.scrollIntoView()
    await this.detailIcon.click();
}
async filterDetail(){
    await this.filterBtn.scrollIntoView()
    await this.filterBtn.click();
}
async clickStartField(){
    await this.startField.click();    
}
async setStartDate(){
    await this.monthDropdown.click();
    await this.labelMonth.click();
    await this.startDate.click()
}
async clickEndField(){
    await this.endField.click()    
}
async setEndDate(){
    await this.monthDropdown.click();
    await this.labelMonth.click();
    await this.endDate.click()
}
async clickFilter(){
    await this.filterModal.click()
}

async clickXFilter(){
    await this.xFilter.click()
}

async ClickResetFilter(){
    await this.resetFilter.click()
}

async detailRelated(){
    await browser.pause(3000)
    await this.detailTR.click()
}

async backTSDetail(){
    this.backTD.click()
}

async clickPrintIcon(){
    this.printIcon.click()
}
async clickStartPrint(){
    this.startPrint.click()
}
async clickEndPrint(){
    this.endPrint.click()
}
async clickPrintBtn(){
    this.printBtn.click()
}

async canceledPrint(){
    this.cancelPrint.click()
}

async clickNavRight(){
    this.navRight.click()
}
async clickNavLeft(){
    this.navLeft.click()
}
    
async placementUpdate(){
    await this.placementBtn.click();
    await browser.pause(6000)
    await this.editIcon.click()
}

async changeName(){
    await this.resourceName.click()
    await this.chooseName.click()
}

async realDataName(){    
    await this.resourceName.click()
    await browser.pause(3000)
    await this.searchName.setValue('testerz')
    await browser.pause(3000)
    await this.realName.click()
}

async changeClient(){
    await this.clientName.click()
    await this.chooseClient.click()
}

async realDataClient(){
    await this.clientName.click()
    await browser.pause(2000)
    await this.searchClient.setValue('ecomindo')
    await browser.pause(2000)
    await this.realClient.click()
}

async changePosition(){
    await this.positionName.click()
    await browser.pause(2000)
    await this.choosePosition.click()
}

async realDataPosition(){
    await this.positionName.click()
    await browser.pause(2000)
    await this.realPosition.click()
}

async changePRFDate(){
    await this.PRFDate.click()
    await this.monthDropdown.click()
    await this.labelMonth.click()
    await browser.pause(2000)
    await this.startDate.click()
}

async changePlacementLoc(location){
    // await this.placementLoc.scrollIntoView()
    // await this.placementLoc.keys(['Control', 'a'])
    // await this.placementLoc.keys('Backspace')
    await browser.execute(function(clearInput){
        clearInput.value ='';}, this.placementLoc)
    await this.placementLoc.setValue(location)
}

async changeType(){
    await this.type.click()
    await this.chooseType.click()
}

async changeStatus(){
    await this.status.click()
    await this.chooseStatus.click()
}

async setReturnDate(){
    await this.dateReturn.scrollIntoView()    
    await this.dateReturn.click()
    await this.monthDropdown.click()
    await this.labelMonth.click()
    await browser.pause(2000)
    await this.endDate.click()
}

async inputReturnReason(){
    await this.returnReason.scrollIntoView()
    await this.returnReason.setValue("sakit")
}

async clickDetail(){
    await this.detailIcon.click()
}

async clickSubmitUpdate(){
    await this.submitUpdate.click()
}
    
async cancelPUpdate(){
    this.cancelUpdate.click()
}

}

export default new Placement2()