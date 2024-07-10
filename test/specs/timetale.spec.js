import TimeTalePage from "../pageobjects/_base-timetale.js";
import { browser, $, expect } from '@wdio/globals'

describe('FITUR WEBSITE TIMETALE PROSIGMAKA', function(){

    before('User harus berada di halaman login',async function() {
        await browser.url('https://timetale.app.prosigmaka.com/app/timetale/login-65fa84538587d32504debb37')
    })
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //SIGN IN
    //negatif
    it('Sign in dengan email dan password yang salah', async function(){
        await TimeTalePage.open()
        await TimeTalePage.login('apa@pa.com', 'admin1234#')
        await browser.pause(3000)
    })

    it('Sign in dengan email yang salah dan password yang benar', async function(){
        await TimeTalePage.open()
        await TimeTalePage.login('apa@gmail.com', '123456')
        await browser.pause(3000)
    })

    it('Sign in dengan email yang salah dan password yang salah', async function(){
        await TimeTalePage.open()
        await TimeTalePage.login('apa@gmail.com', 'admin1234#')
        await browser.pause(3000)
    })
    //--------------------------------------------------------------------------------

    //positif
    it('Sign in dengan email dan password yang benar', async function(){
        await TimeTalePage.open()
        await TimeTalePage.login('apa@pa.com', '123456')
        await browser.pause(3000)
    })

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //DASHBOARD
    it('Akses ke dashboard setelah login', async function() {
        await TimeTalePage.verifyDashboardAccess()
    })

    it('Akses ke Timeshet', async function(){
        await TimeTalePage._timeSheet()
        await browser.pause(2000)
    })

    //positif
    it('Menambahkan Timesheet baru', async function(){
        await TimeTalePage.addNew_timeSheet('08:00', '16:00', '17:00', '22:00', 'Buat website')
        await browser.pause(3000)
        //return browser;
    })

   // it('Menambahkan Timesheet baru', async function(){})

    

})
