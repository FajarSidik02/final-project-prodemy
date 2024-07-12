class Resource3 {
    get resourceBtn(){return $('#header-root > div > div > div.sc-ddKZzx.cLGbXc.t--app-viewer-navigation-sidebar.is-open > div.sc-jaZyJE.elGcVV > div:nth-child(3) > a')}
    
    get newBtn(){return $('[data-widgetname-cy="create_modal_trigger1"]')}
    get nameField(){return $('#auto_bbnw3ms14j > div > div > div.sc-cqQeAO.iNAMSZ.text-input-wrapper > div > span > span > div > input')}
    get NipField(){return $('#auto_v0bqvucc3z > div > div > div.sc-cqQeAO.iNAMSZ.text-input-wrapper > div > span > span > div > input')}
    get emailField(){return $('#auto_bpo47i7bbp > div > div > div.sc-cqQeAO.iNAMSZ.text-input-wrapper > div > span > span > div > input')}
    get startField(){return $('#auto_gpkj5bl11x > div > div > div.sc-cTcUcm.giBtmE')}
    get monthDropdown(){return $('.bp3-html-select.bp3-minimal.bp3-datepicker-month-select > select')}
    get labelMonth(){return $('[label="June"]')}
    get startDate(){return $('[aria-label="Sat Jun 01 2024"]')}
    get endField(){return $('#auto_8izl5p5ieu > div > div > div.sc-cTcUcm.giBtmE')}
    get endDate(){return $('[aria-label="Sun Jun 30 2024"]')}
    get submitBtn(){return $('[data-widgetname-cy="create_form_submit"]')}
    get txtNew(){return $('[data-colindex="1"]')}

    get cancelForm(){return $('[data-widgetname-cy="create_form_cancel"]')}    
    get modalForm(){return $('#root > div.sc-dSLGUj.fKTMqL > section > section > div > div > div > div > div > div.sc-bmhXnO.iIpWJw.auto-layout-layer-0-1 > div.sc-eLdnOn.sc-CqDOO.jPsBDi.eisDow > div > div > div > div > div > div > div.bp3-overlay-content.bp3-overlay-appear-done.bp3-overlay-enter-done')}

    get editIcon(){return $('[data-widgetname-cy="edit_modal_trigger"]')}

    get nameEdit(){return $('#auto_ffmtz66knd > div > div > div.sc-cqQeAO.iNAMSZ.text-input-wrapper > div > span > span > div > input')}
    get nipEdit(){return $('#auto_smr69iz2c6 > div > div > div.sc-cqQeAO.iNAMSZ.text-input-wrapper > div > span > span > div > input')}
    get emailEdit(){return $('#auto_qklzgv8ln1 > div > div > div.sc-cqQeAO.iNAMSZ.text-input-wrapper > div > span > span > div > input')}
    get contStart(){return $('#auto_33pwk2ckq7 > div > div > div.sc-cTcUcm.giBtmE')}
    get contEnd(){return $('#auto_4kuzt9zmg3 > div > div > div.sc-cTcUcm.giBtmE')}
    get txtContract(){return $('#tabledl07ts8min > div.tableWrap.virtual > div > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.sc-jTtXpN.jVTLXN.tbody.body > div > div.tr.selected-row.t--virtual-row > div:nth-child(4) > div > div > div > div > span > div')}

    get submitEdit(){return $('[data-widgetname-cy="update_form_submit"]')}
    get cancelEdit(){return $('[data-widgetname-cy="update_form_cancel"]')}
    get txtEdit(){return $('[data-rowindex="0"]').$('[data-colindex="1"]')}

    get cancelEdit(){return $('[data-widgetname-cy="update_form_cancel"]')}
    get modalEdit(){return $('#root > div.sc-dSLGUj.fKTMqL > section > section > div > div > div > div > div > div.sc-bmhXnO.iIpWJw.auto-layout-layer-0-3 > div.sc-eLdnOn.sc-CqDOO.jPsBDi.eisDow > div > div > div > div > div > div > div.bp3-overlay-content.bp3-overlay-appear-done.bp3-overlay-enter-done')}    
    
    get dataTester(){return $('[data-rowindex="8"]')}
    get detailIcon(){return $('[data-widgetname-cy="detail_resource_button"]')}
    
    get navRight(){return $('#tablegi64jzc4pf > div:nth-child(1) > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div > div > div.sc-ewcqwX.gHknCu.t--table-widget-next-page > span > svg')}
    get navLeft(){return $('#tablegi64jzc4pf > div:nth-child(1) > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div > div > div.sc-ewcqwX.gHknCu.t--table-widget-prev-page > span > svg')}
    get txt1(){return $('#tablegi64jzc4pf > div:nth-child(1) > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div > div > div:nth-child(3) > div')}
    
    get detailHistory(){return $('[data-widgetname-cy="placement_detail_button"]')}
    get txtPlacementDetail(){return $('.sc-hDWPob.hqHObj.bp3-ui-text')}

    get navRightHistory(){return $('#table9bucbxh84i > div:nth-child(1) > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div > div > div.sc-ewcqwX.gHknCu.t--table-widget-next-page')}
    get txtHistory(){return $('#table9bucbxh84i > div:nth-child(1) > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div > div > div:nth-child(3) > div')}
    get navLeftHistory(){return $('#table9bucbxh84i > div:nth-child(1) > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div > div > div.sc-ewcqwX.gHknCu.t--table-widget-prev-page > span > svg')}
    
    get backDetail(){return $('#auto_keryb8703h > div > div > div')}
    get txtBack(){return $('#auto_jqygsdepie > div > div > div > div > span')}


    async openPage(){
        await browser.url('https://timesheet.app.prosigmaka.com/user/login')
    }    
    async resourceList (){
        await this.resourceBtn.click()
    }

    async newResource(){
        await this.newBtn.click()
    }

    async formResource (){
        await this.nameField.setValue("salma")
        await this.NipField.setValue("12341234")
        await this.emailField.setValue("salma@gmail.com")
        await this.startField.click()
        await this.monthDropdown.click()
        await this.labelMonth.click()
        await this.startDate.click()
        await this.endField.click()
        await this.monthDropdown.click()
        await this.labelMonth.click()
        await this.endDate.click()

        await this.submitBtn.click()

    }

    async canceledForm (){
        await this.cancelForm.click()
    }

    async clickEdit (){
        await this.editIcon.click()
    }

    async editName (){     
        await this.nameEdit.setValue("sal")
    }

    async editNIP (){
        await browser.pause(3000)
        await this.nipEdit.setValue("1234567")
    }

    async editEmail(){
        await browser.pause(3000)
        await this.emailEdit.setValue("sal@gmail.com")
    }

    async editContract(){
        await this.contStart.click()
        await this.monthDropdown.click()
        await this.labelMonth.click()
        await this.startDate.click()
        await this.contEnd.click()
        await this.monthDropdown.click()
        await this.labelMonth.click()
        await this.endDate.click()
    }

    async clickSubmitEdit(){
        await this.submitEdit.click()
    }

    async clickCancelEdit(){
        await this.cancelEdit.click()
    }
    
    async resourceDetails(){
        await this.resourceBtn.click()
        await browser.pause(3000)
        await this.dataTester.click()
        await this.detailIcon.click()
    }

    async checkNavLeft(){
        await this.navRight.click()
        await browser.pause(3000)
        await this.navLeft.click()
    }

    async checkDetailHistory(){
        await this.detailHistory.scrollIntoView()
        await this.detailHistory.click()
    }

    async checkNavRightHistory(){
        await this.navRightHistory.scrollIntoView()
        await this.navRightHistory.click()
    }
    async checkNavLeftHistory(){
        await this.navRightHistory.scrollIntoView()
        await this.navRightHistory.click()
        await this.navLeftHistory.click()
    }

    async backResourceDetail(){
        await this.backDetail.click()
    }

    
    

}

export default new Resource3()