import { $,expect, browser } from '@wdio/globals'
import loginPage from '../pageobjects/loginAlya.page.js'


describe ("LOGIN TIMESHEET", function(){
    beforeEach('User harus berada di halaman login',async function() {
        await loginPage.openPage()
    })

    it('1. Login dengan email benar dan password benar', async function (){ 
        await loginPage.login('dummy@prosigmaka.com', 'dummypsm')
        await expect(loginPage.timesheetAdmin).toHaveText('Timesheet Admin')
        await loginPage.logout()
    })

    it('2. Login dengan email salah dan password benar', async function (){ 
        await loginPage.login('alyaaw@prosigmaka.com', 'dummypsm')
        await expect(loginPage.errorLogin).toHaveText('It looks like you may have entered incorrect/invalid credentials. Please try again or reset password using the button below.')
    })

    it('3. Login dengan email benar dan password salah', async function (){ 
        await loginPage.login('dummy@prosigmaka.com', 'dummy123')
        await expect(loginPage.errorLogin).toHaveText('It looks like you may have entered incorrect/invalid credentials. Please try again or reset password using the button below.')
    })

    it('4. Login dengan email salah dan password salah', async function (){ //"Your account is suspended for 24 hours. Please reset your password to continue"
        await loginPage.login('alyaaw@prosigmaka.com', 'dummy123')
        await expect(loginPage.errorLogin).toHaveText('It looks like you may have entered incorrect/invalid credentials. Please try again or reset password using the button below.')
    })

    it('5. Login dengan email tidak valid dan password benar', async function (){ 
        await loginPage.login('dummy', 'dummypsm')
        await expect(loginPage.noValid).toHaveText('Please provide a valid email address')
    })

    it('6. Login dengan mengosongkan email dan password', async function (){ //yang kosong" error
        await loginPage.login('', '')
        await expect(loginPage.btnSignIn).toBeDisabled()
    })

    it('7. Login dengan email benar dan password kosong', async function (){ 
        await loginPage.login('dummy@prosigmaka.com', '')
        await expect(loginPage.btnSignIn).toBeDisabled()
    })

    it('8. login dengan email kosong dan password benar', async function (){ 
        await loginPage.login('', 'dummypsm')
        await expect(loginPage.btnSignIn).toBeDisabled()
    })

    it('9. Login dengan email benar tapi kombinasi huruf besar kecil dan password benar', async function (){ 
        await loginPage.login('dumMy@prosigmaka.com', 'dummypsm')
        await expect(loginPage.timesheetAdmin).toHaveText('Timesheet Admin')
        await loginPage.logout()
    })

    it('10. Login dengan email yang dispasi dan password benar', async function (){ 
        await loginPage.login('dummy @prosigmaka.com', 'dummypsm')
        await expect(loginPage.noValid).toHaveText('Please provide a valid email address')
    })

    it('11. Login dengan email format email salah ketik (typo) dan password benar', async function (){ 
        await loginPage.login('dummy@prosignaka.com', 'dummypsm')
        await expect(loginPage.errorLogin).toHaveText('It looks like you may have entered incorrect/invalid credentials. Please try again or reset password using the button below.')
    })
})