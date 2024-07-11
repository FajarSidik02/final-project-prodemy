import { $,expect } from '@wdio/globals'

class JarResource{
   get buttonResource(){return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[3]/a')}
   get listresource(){return $('//*[@id="tabledl07ts8min"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div/div[10]/div[1]/div/div/div/div')}
   get buttonMata(){return $('#auto_zy2l3t0tiw > div > div > span > div > button')}
   get buttonFilter(){return $('//*[@id="auto_bltdv6jlbs"]/div/div/span/div')}
   get startDate(){return $('#auto_1golpvk4yw > div > div > div.sc-cTcUcm.giBtmE > div > span > span > span > span > div > input')}
   get endDate(){return $('#auto_wsergub4c2 > div > div > div.sc-cTcUcm.giBtmE > div > span > span > span > span > div > input')}
   get tanggal1(){return $('[aria-label="Mon Jul 01 2024"]')}
   get tanggal2(){return $('[aria-label="Tue Jul 02 2024"]')}
   get buttonfilter2(){return $('//*[@id="auto_tsk973gndb"]/div/div/div')}
   get date1(){return $('//*[@id="tablegi64jzc4pf"]/div[2]/div/div/div[1]/div[2]/div/div/div/div[2]/div/div[1]/div[1]/div/div/div/div/span/div')}
   get buttonReset(){return $('//*[@id="auto_828wajdjxa"]/div/div/div')}
   get buttonX1(){return $('//*[@id="auto_vxtovcwxpr"]/div/div')}
   get buttonmata2(){return $('//*[@id="auto_wjdii5rojc"]/div/div/span/div')}
   get textTSD(){return $('//*[@id="auto_rzwyth16s4"]/div/div/div/div/span')}
   get buttonBack(){return $('//*[@id="auto_ubto2up4bx"]/div/div/div')}
   get buttonPrint(){return $('//*[@id="auto_zq9rzye0w1"]/div/div')}
   get start1(){return $('//*[@id="auto_jj9onrmlu7"]/div/div/div[2]/div/span/span/span/span/div/input')}
   get end1(){return $('//*[@id="auto_c11ardwe8m"]/div/div/div[2]/div/span/span/span/span/div/input')}
   get tanggala(){return $('[aria-label="Mon Jul 01 2024"]')}
   get tanggalb(){return $('[aria-label="Tue Jul 02 2024"]')}
   get buttonPrint2(){return $('//*[@id="auto_potmdbhan5"]/div/div/div')}
   get popupPrint(){return $('[class="Toastify__toast Toastify__toast-theme--light Toastify__toast--success ads-v2-toast"]')}
   get cancelPrint(){return $('//*[@id="auto_u78plb2syf"]/div/div/div')}
   get nextNav(){return $('//*[@id="tablegi64jzc4pf"]/div[1]/div[1]/div[2]/div/div/div/div/div/div/div[4]')}
   
   
   async clickButtonResource() {
    await this.buttonResource.click()
   }
   async clickListResource() {
    await this.listresource.click()
   }
   async clickbuttonMata() {
    await this.buttonMata.click()
   }
   async clickbuttonFilter() {
    await this.buttonFilter.click()
   }
   async clickTanggal() {
    await this.startDate.click()
    await this.tanggal1.click()
    await this.endDate.click()
    await this.tanggal2.click()
    await this.buttonfilter2.click()
   }
   async clickReset() {
    await this.buttonReset.click()
   }
   async clickX1() {
    await this.buttonX1.click()
   }
   async clickButtonMata2() {
    await this.buttonmata2.click()
   }
   async clickButtonBack() {
    await this.buttonBack.click()
   }
   async clickButtonPrint() {
    await this.buttonPrint.click()
   }
   async isiPrint() {
    await this.start1.click()
    await this.tanggala.click()
    await this.end1.click()
    await this.tanggalb.click()
    await browser.pause(1000)
    await this.buttonPrint2.click()
    await browser.pause(2000)
   }
   async clickCancelPrint() {
    await this.cancelPrint.click()
   }
   async clickNextNav() {
    await this.nextNav.click()
   }

   async openPage(){
        await browser.url('https://timesheet.app.prosigmaka.com/user/login')
    }
}

export default new JarResource()