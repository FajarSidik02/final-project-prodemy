import { $,expect } from '@wdio/globals'

class JarResource{
   

    
    async openPage(){
        await browser.url('https://timesheet.app.prosigmaka.com/user/login')
    }
}

export default new JarResource()