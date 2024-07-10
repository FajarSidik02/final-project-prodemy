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
        //return $('/html/body/div[3]/div[2]/section/section/div/div/div/div/div/div/div/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div/div/div/div[5]/div/div/div/div/div/div/div/div/div[2]/div/div/div/div');
        return $('//*[@id="auto_fqz6ws5ld2"]/div/div/div')
        //return $('#auto_fqz6ws5ld2 > div > div > div')
    }

    get btnGoToTimesheet () {
        return $('//*[@id="auto_kbinjp2zx3"]/div/div/span/div/div')
    }

    get btnAddNew () {
        return $('//*[@id="auto_ic6uuukbdw"]/div/div/div')
        //return $('/html/body/div[3]/div[2]/section/section/div/div/div/div/div/div[1]/div/div/div/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div[5]/div/div/div')
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

    get inputActivityNote () {
        return $('//*[@id="auto_onwv2kln89"]/div/div[2]/div/span/span/textarea')
    }

    get btnSubmit () {
        return $('//*[@id="auto_1m5kooirv2"]/div/div/div/button')
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
        await this.btnGoToTimesheet.waitForExist()
        await this.btnGoToTimesheet.click()
        await browser.pause(5000)
        //return browser;
    }

    async addNew_timeSheet(worktimeStart, worktimeEnd, overtimeStart, overtimeEnd, activityNote) {
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
        await this.btnSubmit.click()
    }

    //async input_timeSheet() {}
}

export default new TimeTalePage();