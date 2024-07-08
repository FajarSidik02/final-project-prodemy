import { $,expect } from '@wdio/globals'

class JarResource{
   get buttonResource(){return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[3]/a')}



   async clickButtonResource() {
    await this.buttonResource.click()
   }
   async openPage(){
        await browser.url('https://timesheet.app.prosigmaka.com/user/login')
    }
}

export default new JarResource()