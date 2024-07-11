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

    it('Akses ke Timesheet', async function(){
        await TimeTalePage._timeSheet()
        await browser.pause(2000)
    })

    it('Kembali ke Dashboard', async function(){
        await TimeTalePage._dashboard()
        await browser.pause(2000)
    })

    it('Akses ke Go To Timeshet', async function(){
        await TimeTalePage.goTo_timeSheet()
        await browser.pause(2000)
    })

    //positif
    it('Menambahkan Timesheet baru dengan attendence Sakit', async function(){
        await TimeTalePage.addNew_timeSheet_submit_sakit()
        await browser.pause(3000)
    })

    it('Menambahkan Timesheet baru', async function(){
        await TimeTalePage.addNew_timeSheet_submit('08:00', '16:00', '17:00', '22:00', 'Buat website X')
        await browser.pause(3000)
        //return browser;
    })

    it('Melakukan reset data pada timesheet baru', async function(){
        await TimeTalePage.addNew_timeSheet_reset('08:00', '16:00', '17:00', '22:00', 'Buat website X')
        await browser.pause(3000)
        //return browser;
    })

    it('Melakukan update timesheet', async function(){
        await TimeTalePage.update_timeSheet_submit('08:00', '16:00', '17:00', '20:00', 'Buat website YY')
        await browser.pause(3000)
    })

    it.skip('Melakukan filter pada timesheet', async function(){
        await TimeTalePage.filter_timeSheet()
        await browser.pause(3000)
    })

    it('Menghapus data timesheet', async function(){
        await TimeTalePage.delete_timeSheet()
        await browser.pause(2000)
    })

    it('Melakukan next page pada timesheet', async function(){
        await TimeTalePage.nextPage()
        await browser.pause(2000)
    })

    it('Melakukan previous page pada timesheet', async function(){
        await TimeTalePage.previousPage()
        await browser.pause(2000)
    })

    it.skip('Melakukan ganti page dengan manual input angka 1', async function(){
        await TimeTalePage.inputPage('1')
    })

    it.skip('Melakukan ganti page dengan manual input angka 2', async function(){
        await TimeTalePage.inputPage('2')
    })

    it.skip('Melakukan ganti page dengan manual input lebih dari angka 2', async function(){
        await TimeTalePage.inputPage('30')
    })

    it.skip('Melakukan ganti page dengan manual input angka 0', async function(){
        await TimeTalePage.inputPage('0')
    })

    it('Melakukan Print', async function(){
        await TimeTalePage.print_timeSheet('2024-07-03', '2024-07-10', 'Ahmad')
    })

    it('Membatalkan Print', async function(){
        await TimeTalePage.print_timeSheet('2024-07-03', '2024-07-10', 'Ahmad')
        await TimeTalePage.cancel_print()
        await browser.pause(2000)
    })


})
