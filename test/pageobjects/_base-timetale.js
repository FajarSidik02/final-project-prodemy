import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class TimeTalePage {
    /**
    * Opens a sub page of the page
    * /*@param path path of the sub page (e.g. /path/to/page.html)
    */
    open () {
        return browser.url(`https://timetale.app.prosigmaka.com/app/timetale/login-65fa84538587d32504debb37`)
    }

    get inputUsername () {
        return $('input[placeholder="Enter your email address"]')
    }

    get inputPassword () {
        return $('input[placeholder="Enter your password"]')
    }

    get btnSignIn () {
        return $('[ data-widgetname-cy="login_button"]')
    }

    get btnDashboard () {
        return $('//*[@id="header-root"]/div/div/div[1]/div/div/div[1]/a')
    }

    get btnTimesheet () {
        return $('//*[@id="header-root"]/div/div/div[1]/div/div/div[2]/a')
    }

    get btnGoToTimesheet () {
        return $('[data-widgetname-cy="Button1"]')
    }

    get btnAddNew () {
        return $('[data-widgetname-cy="AddButton"]')
    }

    get inputWorktime_start () {
        return $('//*[@id="auto_9cawbt0huy"]/div/div/div[2]/div/span/span/div/input')
    }

    get inputWorktime_end () {
        return $('//*[@id="auto_cj22askszk"]/div/div/div[2]/div/span/span/div/input')
    }

    get inputOvertime_start () {
        return $('//*[@id="auto_dcxicnecpv"]/div/div/div[2]/div/span/span/div/input')
    }

    get inputOvertime_end () {
        return $('//*[@id="auto_bdbu05fdfb"]/div/div/div[2]/div/span/span/div/input')
    }

    get btnAttendance () {
        return $('//*[@id="auto_io437qul31"]/div/div/div[2]/span/span/div/button/span')
    }

    get btnAttd_hadir () {
        return $('/html/body/div[6]/div/div/div/div/div/div/div/div[1]/div/a/div')
    }

    get btnAttd_sakit () {
        return $('/html/body/div[6]/div/div/div/div/div/div/div/div[2]/div/a')
    }

    get inputActivityNote () {
        return $('//*[@id="auto_onwv2kln89"]/div/div[2]/div/span/span/textarea')
    }

    get btnSubmit () {
        return $('[data-widgetname-cy="btn_submit_new_timesheet"]')
    }

    get btnReset () {
        return $('[data-widgetname-cy="btn_reset"]')
    }

    get btnReset_close () {
        return $('[data-widgetname-cy="button_close_modal"]')
    }

    get btnUpdate () {
        return $('[data-widgetname-cy="update_timesheet_button"]')
    }

    get clickDataTimesheet_ () {
        return $('//*[@id="table4ngnjq782v"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div[8]')
    }

    get inputUpdate_start () {
        return $('//*[@id="auto_b2fzpyi8nn"]/div/div/div[2]/div/span/span/div/input')
    }

    get inputUpdate_end () {
        return $('//*[@id="auto_h0ng26njqd"]/div/div/div[2]/div/span/span/div/input')
    }

    get inputUpdate_overtime_start () {
        return $('//*[@id="auto_f16csgpf1l"]/div/div/div[2]/div/span/span/div/input')
    }

    get inputUpdate_overtime_end () {
        return $('//*[@id="auto_kb34b5ls8e"]/div/div/div[2]/div/span/span/div/input')
    }

    get inputUpdate_activityNote () {
        return $('//*[@id="auto_b8r2n55g6f"]/div/div[2]/div/span/span/textarea')
    }

    get btnAttendance_update () {
        return $('//*[@id="auto_5rav50jqwt"]/div/div/div[2]/span/span/div/button')
    }

    get btnAttd_hadir_update () {
        return $('/html/body/div[7]')
    }

    get btnSubmit_update () {
        return $('[data-widgetname-cy="button_submit_update"]')
    }

    get btnFilter () {
        return $('[data-widgetname-cy="FilterButton"]')
    }

    get inputStartDate_filter () {
        return $('div.DayPicker-Day[aria-label*="Jul 03 2024"]')
    }

    get inputEndDate_filter () {
        return $('div.DayPicker-Day[aria-label*="Jul 10 2024"]')
    }

    get btnSubmit_filter () {
        return $('[data-widgetname-cy="SubmitFilter"]')
    }

    get overlayStart () {
        return $('/html/body/div[6]/div')
    }

    get overlayEnd () {
        return $('/html/body/div[6]/div')
    }

    get clickDataTimesheet () {
        return $('//*[@id="table4ngnjq782v"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div[2]')
    }

    get btnDetele_timeSheet () {
        return $('[data-widgetname-cy="delete_timesheet_button"]')
    }

    get btnSubmitDelete_timeSheet () {
        return $('[data-widgetname-cy="DeleteButton"]')
    }

    get btnNextPage () {
        return $('.sc-ewcqwX.gHknCu.t--table-widget-next-page')
    }

    get btnPreviousPage () {
        return $('.sc-ewcqwX.gHknCu.t--table-widget-prev-page')
    }

    get input_Page () {
        return $('//*[@id="table4ngnjq782v"]/div[1]/div[1]/div[2]/div/div/div/div/div/div/div[3]/div')
    }

    get btnPrint () {
        return $('[data-widgetname-cy="IconButton2"]')
    }

    get inputStartDate_print () {
        return $('//*[@id="auto_llx7rr9gr0"]/div/div/div[2]/div/span/span/span/span/div/input')
    }

    get inputEndDate_print () {
        return $('//*[@id="auto_v460ugqhym"]/div/div/div[2]/div/span/span/span/span/div/input')
    }

    get input_TTD1 () {
        return $('//*[@id="auto_yulv1p58w7"]/div/div/div[2]/div/span/span/div/input')
    }

    get btnSubmit_print () {
        return $('[data-widgetname-cy="submit_print_button"]')
    }

    get btnCancel_print () {
        return $('[data-widgetname-cy="cancel_print_button"]')
    }

    get btnShare () {
        return $('//*[@id="header-root"]/div/div/div[1]/div/section[2]/div/button')
    }

    get btnCopyURL () {
        return $('//*[@id="radix-0"]/div[2]/div/button')
    }

    get btnClose_share () {
        return $('//*[@id="radix-0"]/div[1]/button')
    }

    get btnSignOut () {
        return $('[data-widgetname-cy="sign_out_button"]')
    }

    //-------------------------------------------------------------------------------------------------------
    
    async login (username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        //await this.btnSignIn.waitForClickable({ timeout: 8000 });
        await this.btnSignIn.click()
    }

    async verifyDashboardAccess() {
        await browser.pause(3000)
        //return browser;
    }

    async _timeSheet() {
        await this.btnTimesheet.waitForExist()
        await this.btnTimesheet.click()
        await browser.pause(3000)
    }

    async _dashboard() {
        await this.btnDashboard.waitForExist()
        await this.btnDashboard.click()
        await browser.pause(3000)
    }

    async goTo_timeSheet() {
        await this.btnGoToTimesheet.waitForExist()
        await this.btnGoToTimesheet.click()
        await browser.pause(3000)
        //return browser;
    }

    async addNew_timeSheet_submit(worktimeStart, worktimeEnd, overtimeStart, overtimeEnd, activityNote) {
        await this.btnAddNew.waitForExist()
        await this.btnAddNew.click()
        await browser.pause(3000)

        await this.inputWorktime_start.setValue(worktimeStart)
        await this.inputWorktime_end.setValue(worktimeEnd)
        await this.inputOvertime_start.setValue(overtimeStart)
        await this.inputOvertime_end.setValue(overtimeEnd)
        await this.inputActivityNote.setValue(activityNote)
        await this.btnAttendance.click()
        await this.btnAttd_hadir.click()
        await this.btnSubmit.click()
        await browser.pause(3000)
    }

    async addNew_timeSheet_submit_sakit() {
        await this.btnAddNew.waitForExist()
        await this.btnAddNew.click()
        await browser.pause(3000)

        await this.btnAttendance.click()
        await this.btnAttd_sakit.click()
        await this.btnSubmit.click()
        await browser.pause(2000)
    }

    async addNew_timeSheet_reset(worktimeStart, worktimeEnd, overtimeStart, overtimeEnd, activityNote) {
        await this.btnAddNew.waitForExist()
        await this.btnAddNew.click()
        await browser.pause(5000)

        await this.inputWorktime_start.setValue(worktimeStart)
        await this.inputWorktime_end.setValue(worktimeEnd)
        await this.inputOvertime_start.setValue(overtimeStart)
        await this.inputOvertime_end.setValue(overtimeEnd)
        await this.inputActivityNote.setValue(activityNote)
        await this.btnAttendance.click()
        await this.btnAttd_hadir.click()
        await this.btnReset.click()
        await this.btnReset_close.click()
    }

    async update_timeSheet_submit(start, end, overtimeStart, overtimeEnd, activityNote) {
        await this.btnUpdate.waitForExist()
        await this.btnUpdate.click()
        await browser.pause(5000)

        //await this.btnAttendance_update.click()
        //await this.btnAttd_hadir_update.click()
        //await browser.pause(1000)

        await this.inputUpdate_start.click()
        await this.inputUpdate_start.click()
        await browser.keys(['Control', 'a'])
        await browser.keys('Delete')
        await this.inputUpdate_start.setValue(start)
        await browser.pause(1000)

        await this.inputUpdate_end.click()
        await this.inputUpdate_end.click()
        await browser.keys(['Control', 'a'])
        await browser.keys('Delete')
        await this.inputUpdate_end.setValue(end)
        await browser.pause(1000)

        await this.inputUpdate_overtime_start.click()
        await this.inputUpdate_overtime_start.click()
        await browser.keys(['Control', 'a'])
        await browser.keys('Delete')
        await this.inputUpdate_overtime_start.setValue(overtimeStart)
        await browser.pause(1000)

        await this.inputUpdate_overtime_end.click()
        await this.inputUpdate_overtime_end.click()
        await browser.keys(['Control', 'a'])
        await browser.keys('Delete')
        await this.inputUpdate_overtime_end.setValue(overtimeEnd)
        await browser.pause(1000)

        await this.inputUpdate_activityNote.click()
        await this.inputUpdate_activityNote.click()
        await browser.keys(['Control', 'a'])
        await browser.keys('Delete')
        await this.inputUpdate_activityNote.setValue(activityNote)
        await browser.pause(1000)

        await this.btnSubmit_update.click()
    }

    async filter_timeSheet(){
        await this.btnFilter.click()
        await this.overlayStart.click()
        await this.inputStartDate_filter.click()
        await browser.pause(3000)
        await this.overlayEnd.click()
        await this.inputEndDate_filter.click()
        await browser.pause(3000)
        await this.btnSubmit_filter.click()
    }

    async delete_timeSheet(){
        await this.clickDataTimesheet.click()
        await this.btnDetele_timeSheet.click()
        await browser.pause(1000)
        await this.btnSubmitDelete_timeSheet.click()
    }

    async nextPage(){
        await this.btnNextPage.click()
        await browser.pause(1000)
        await this.btnNextPage.click()
    }

    async previousPage(){
        await this.btnPreviousPage.click()
        await browser.pause(1000)
        await this.btnPreviousPage.click()
    }

    async inputPage (inputPg) {
        await this.input_Page.waitForDisplayed()
        await this.input_Page.click()
        await browser.keys(['Control', 'a'])
        await browser.pause(2000)
        await browser.keys('Delete')
        await this.input_Page.addValue(inputPg)
        await browser.pause(2000)
        await browser.keys('Enter')
    }

    async print_timeSheet (inputstart_date, inputend_date, inputTTD1) {
        await this.btnPrint.click()
        await browser.pause(2000)
        await this.inputStartDate_print.setValue(inputstart_date)
        await browser.keys('Enter')
        await browser.pause(3000)
        await this.inputEndDate_print.setValue(inputend_date)
        await browser.keys('Enter')
        await browser.pause(3000)
        await this.input_TTD1.setValue(inputTTD1)
        await browser.pause(2000)
        await this.btnSubmit_print.click()
        await browser.pause(3000)
    }

    async cancel_print (inputTTD1) {
        await this.btnPrint.click()

        await this.input_TTD1.setValue(inputTTD1)
        await browser.pause(2000)
        await this.btnCancel_print.click()
        await browser.pause(2000)
    }

    async share () {
        await this.btnShare.click()
        await this.btnCopyURL.click()
        await this.btnClose_share.click()
        await browser.pause(2000)
    }

    async sign_out () {
        await this.btnSignOut.click()
        await browser.pause(2000)
    }
}

export default new TimeTalePage();