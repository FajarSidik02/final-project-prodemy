class Placement2 {
get username(){return ('input[name="username"]')}
get password(){return ('input[name="password"]')}
get signIn(){return ('button[type="submit"]')}

get timesheetAdmin (){return $('#root > section > div > div.sc-gfhzuL.cMfFWL > div > div.sc-GQHCi.lmmNTr.t--workspace-section > div.sc-kmtlux.bXecFQ > div.sc-jigNDC.gpcQed > div:nth-child(1) > div > div')}
get placementBtn(){ return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[2]/a')}
get dataUser(){return $('[data-rowindex="1"]')}
get detailIcon (){ return $('#auto_0k3c5fbdqw')};

get filterBtn (){return $('#auto_qui9zydxo6')}
get startField (){return $('#auto_k5ffyfwp82 > div > div > div.sc-cTcUcm.giBtmE')}
get monthDropdown(){return $('.bp3-html-select.bp3-minimal.bp3-datepicker-month-select > select')}
get labelMonth(){return $('[label="June"]')}
get startDate(){return $('[aria-label="Sat Jun 22 2024"]')}
get endField(){return $('#auto_5htwofskwt > div > div > div.sc-cTcUcm.giBtmE')}
get endDate(){return $('[aria-label="Sun Jun 23 2024"]')}
get filterModal (){ return $('[data-widgetname-cy="SubmitFilter"]')}
get txtFilter(){ return $('#ToastId30 ')}

get cancelFilter(){return $('.sc-jLobnj.leTMVt')}
get txtCancelFIlter(){return $('#tablezx8uhytssd > div.tableWrap.virtual > div > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.sc-jTtXpN.jVTQKX.tbody.body > div > div.tr.selected-row.t--virtual-row > div:nth-child(1) > div > div > div > div > span > div')}

get detailTR(){return $('#auto_i4ju791j0n > div > div > span > div > button')};
get txtTimesheetDetail(){return $('#auto_gdt4faci21 > div > div > div > div > span')}

get backTD(){return $('#auto_ubto2up4bx > div > div > div')}
get txtBack(){return $('#auto_21r84t99at > div > div > div > div > span')}

get printIcon(){return $('#auto_p8iwwpitf5 > div > div > button')}
get printBtn(){return $('[data-widgetname-cy="submit_print_button"]')}
get startPrint(){return $('#auto_l3vj0y7lif > div > div > div.sc-cTcUcm.giBtmE')}
get endPrint(){return $('#auto_rpqo36kli9 > div > div > div.sc-cTcUcm.giBtmE')}

get cancelPrint(){return $('#auto_qqj953m29c > div > div > div')}
get modalPrint(){return $('#root > div.sc-dSLGUj.fKTMqL > section > section > div > div > div > div > div > div.sc-bmhXnO.iIpWJw.auto-layout-layer-0-2 > div.sc-eLdnOn.sc-fyJLnQ.jPsBDi.hxbasM > div > div > div > div > div > div > div.bp3-overlay-content.bp3-overlay-appear-done.bp3-overlay-enter-done')}

get navRight(){return $('#tablezx8uhytssd > div:nth-child(1) > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div > div > div.sc-ewcqwX.gHknCu.t--table-widget-next-page > span > svg')}
get txt2(){return $('#tablezx8uhytssd > div:nth-child(1) > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div > div > div.sc-ewcqwX.gHknCu.page-item')}
get navLeft(){return $('#tablezx8uhytssd > div:nth-child(1) > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div > div > div.sc-ewcqwX.gHknCu.t--table-widget-prev-page > span')}
get txt1(){return $('#tablezx8uhytssd > div:nth-child(1) > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div > div > div.sc-ewcqwX.gHknCu.page-item')}

get editIcon(){return $('#auto_mkuc2i83ax > div > div > span > div > button')}

get resourceName(){return $('#auto_ehlw8i9j8r > div > div > div.bp3-control-group.bp3-fill.sc-iMSIvx.kxHJWT > span > span')}
get chooseName(){return $('body > div.bp3-portal > div > div > div > div > div > div.menu-virtual-list > div > div:nth-child(2)')}

get cancelUpdate(){return $('#auto_53d888vnwy > div > div > div')}
get txtCancel(){return $('#auto_3pwsppo3a6 > div > div > div > div > span')}

async openPage(){
    await browser.url('https://timesheet.app.prosigmaka.com/user/login')
}  

async login(){
    await this.username.setValue('dummy@prosigmaka.com')
    await this.password.setValue('dummypsm')
    await this.signIn.click()
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

async canceledFilter(){
    await this.cancelFilter.click()
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
    
async cancelPUpdate(){
    this.cancelUpdate.click()
}

}

export default new Placement2()