import TimeTalePage from "../pageobjects/_base-timetale.js";
import { browser, $, expect } from '@wdio/globals'

describe('FITUR WEBSITE TIMETALE PROSIGMAKA', function(){

    before('User harus berada di halaman login',async function() {
        await browser.url('https://timetale.app.prosigmaka.com/app/timetale/login-65fa84538587d32504debb37')
    })
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //SIGN IN
    //negatif
    it('2. Sign in dengan email yang benar dan password yang salah', async function(){
        await TimeTalePage.open()
        await TimeTalePage.login('apa@pa.com', 'admin1234#')
        await browser.pause(3000)
    })

    it('3. Sign in dengan email yang salah dan password yang benar', async function(){
        await TimeTalePage.open()
        await TimeTalePage.login('apa@gmail.com', '123456')
        await browser.pause(3000)
    })

    it('4. Sign in dengan email yang salah dan password yang salah', async function(){
        await TimeTalePage.open()
        await TimeTalePage.login('apa@gmail.com', 'admin1234#')
        await browser.pause(3000)
    })
    //--------------------------------------------------------------------------------

    //positif
    it('1. Sign in dengan email dan password yang benar', async function(){
        await TimeTalePage.open()
        await TimeTalePage.login('apa@pa.com', '123456')
        await browser.pause(3000)
    })

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //DASHBOARD
    it('5. Akses ke dashboard setelah login', async function() {
        await TimeTalePage.verifyDashboardAccess()
    })

    it('6. Akses ke Timesheet', async function(){
        await TimeTalePage._timeSheet()
        await browser.pause(2000)
    })

    it('8. Akses ke dashboard melalui navbar', async function(){
        await TimeTalePage._dashboard()
        await browser.pause(2000)
    })

    it('7. Akses ke Go To Timeshet Page', async function(){
        await TimeTalePage.goTo_timeSheet()
        await browser.pause(2000)
    })
    // TIMESHEET
    //positif
    it('9. Menambahkan Timesheet baru', async function(){
        await TimeTalePage.addNew_timeSheet_submit('08:00', '16:00', '17:00', '22:00', 'Buat website X')
        await browser.pause(3000)
        //return browser;
    })

    it('10. Menambahkan Timesheet baru dengan attendence Sakit', async function(){
        await TimeTalePage.addNew_timeSheet_submit_sakit()
        await browser.pause(3000)
    })

    it.skip('11. Menambahkan timesheet baru dengan Attendance Sakit ditanggal yang berbeda', async function(){
        await TimeTalePage.addNew_date('2024-07-08')
        await TimeTalePage.addNew_timeSheet_submit_sakit()
        await browser.pause(3000)
    })

    it('12. Menambahkan Timesheet baru dengan attendence Libur', async function(){
        await TimeTalePage.addNew_timeSheet_submit_libur()
        await browser.pause(3000)
    })

    it('13. Menambahkan Timesheet baru dengan attendence Cuti', async function(){
        await TimeTalePage.addNew_timeSheet_submit_cuti()
        await browser.pause(3000)
    })

    it('14. Menambahkan Timesheet baru dengan attendence Sakit', async function(){
        await TimeTalePage.addNew_timeSheet_submit_alpa()
        await browser.pause(3000)
    })

    it.skip('15. Menambahkan timesheet baru dengan Attendance Alpa dianggal yang berbeda', async function(){
        await TimeTalePage.addNew_date('2024-07-07')
        await TimeTalePage.addNew_timeSheet_submit_alpa()
        await browser.pause(3000)
    })

    it.skip('16. Menambahkan timesheet baru dengan Attendance Alpa ditanggal yang sama dengan submit yang attendance Sakit', async function(){
        await TimeTalePage.addNew_date('2024-07-08')
        await TimeTalePage.addNew_timeSheet_submit_alpa()
        await browser.pause(3000)
    })

    it('17. Menambahkan timesheet baru dengan data kosong', async function(){
        await TimeTalePage.addNew_blank()
        await browser.pause(3000)
    })

    it.skip('18. Menambahkan timesheet baru jika worktime start 08:00 dan end 07:00', async function(){

    })

    it.skip('19. Menambahkan timesheet baru jika overtime start 18:00 dan end 17:00', async function(){

    })

    it('20. Melakukan reset data pada timesheet baru', async function(){
        await TimeTalePage.addNew_timeSheet_reset('08:00', '16:00', '17:00', '22:00', 'Buat website X')
        await browser.pause(3000)
    })

    it.skip('21. Membatalkan pada penambahan data timesheet baru', async function(){

    })

    it('22. Menghapus data timesheet', async function(){
        await TimeTalePage.delete_timeSheet()
        await browser.pause(2000)
    })

    it.skip('23. Membatalkan menghapus data timesheet', async function(){

    })

    it.skip('24. Menggunakan filter jika start date 2023-05-15 dan end date dikosongkan', async function(){

    })

    it.skip('25. Menggunakan filter jika start date dikosongkan dan end date 2023-05-15', async function(){

    })

    it.skip('26. Menggunakan filter jika start date dan end date diikosongkan', async function(){

    })

    it('27. Melakukan filter pada timesheet', async function(){
        await TimeTalePage.filter_timeSheet('2024-07-02', '2024-07-11')
        await browser.pause(3000)
    })

    it('28. Melakukan reset filter pada timesheet', async function(){
        await TimeTalePage.reset_filter_timeSheet()
        await browser.pause(2000)
    })

    it.skip('29. Membatalkan reset filter', async function(){

    })

    it.skip('30. Menggunakan update timesheet dengan status sakit menjadi hadir', async function(){

    })

    it.skip('31. Melakukan update Timesheet  dan mengganti Activity Note menjadi Mengerjakan Test Case Z', async function(){

    })

    it.skip('32. Melakukan update Timesheet dan mengganti End 18:00, Overtime Start 18:00. dan Overtime End 08:00', async function(){

    })

    it.skip('33. Melakukan update Timesheet  dan mengganti Overtime End 23:59', async function(){

    })

    it.skip('34. Melakukan update timesheet', async function(){
        await TimeTalePage.update_timeSheet_submit('08:00', '16:00', '17:00', '20:00', 'Buat website YY')
        await browser.pause(3000)
    })

    it('35. Melakukan next page pada timesheet', async function(){
        await TimeTalePage.nextPage()
        await browser.pause(2000)
    })

    it('36. Melakukan previous page pada timesheet', async function(){
        await TimeTalePage.previousPage()
        await browser.pause(2000)
    })

    it.skip('37. Melakukan ganti page dengan manual input angka 2', async function(){
        await TimeTalePage.inputPage('2')
    })

    it.skip('38. Melakukan ganti page dengan manual input angka 1', async function(){
        await TimeTalePage.inputPage('1')
    })

    it.skip('39. Melakukan ganti page dengan manual input lebih dari angka 2', async function(){
        await TimeTalePage.inputPage('30')
    })

    it.skip('40. Melakukan ganti page dengan manual input angka 0', async function(){
        await TimeTalePage.inputPage('0')
    })

    it('41. Melakukan Print', async function(){
        await TimeTalePage.print_timeSheet('2024-07-02', '2024-07-11', 'Ahmad', 'Budi', 'Coro', 'Dono', 'Eko', 'Feri')
    })

    it.skip('42. Melakukan print jika nama TTD2 yang diisi', async function(){

    })

    it.skip('43. Melakukan print jika nama TTD sama', async function(){

    })

    it.skip('44. Melakukan print jika nama TTD ada yang menggunakan selain abjad (angka dan simbol)', async function(){

    })

    it.skip('45. Melakukan print jika semua nama TTD kosong', async function(){

    })

    it.skip('46. Melakukan print jika Date dikosongkan', async function(){

    })

    it.skip('47. Melakukan print jika Start Date dikosongkan', async function(){

    })

    it.skip('48. Melakukan print jika End Date dikosongkan', async function(){

    })

    it.skip('49. Melakukan print jika tidak pada tanggalnya', async function(){

    })

    it('50. Membatalkan Print', async function(){
        await TimeTalePage.cancel_print('ALUL')
        await browser.pause(2000)
    })

    it('51. Melakukan Share', async function(){
        await TimeTalePage.share()
        await browser.pause(2000)
    })

    it('52. Kembali ke Dashboard', async function(){
        await TimeTalePage._dashboard()
        await browser.pause(2000)
    })

    it('53. Melakukan Sign Out', async function(){
        await TimeTalePage.sign_out()
    })
})
