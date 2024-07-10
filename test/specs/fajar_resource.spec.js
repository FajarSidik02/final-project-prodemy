import { $,expect, browser } from '@wdio/globals'
import jarPlacement from '../pageobjects/fajar_placement.js'
import jarResource from '../pageobjects/fajar_resource.js'
describe ('Test Case 13 -22', function(){
    before('User login', async function (){
        await jarPlacement.openPage()
        await browser.setWindowSize(1920,1080)
        await jarPlacement.login('dummy@prosigmaka.com','dummypsm')
        await browser.pause(2000)
        await jarPlacement.openTimesheet()
        await browser.pause(2000)
        await jarResource.clickButtonResource()
        await jarResource.clickListResource()
        await jarResource.clickbuttonMata()
    })

    it('test case 12 - Filter Resource timesheets dengan time valid', async function (){ 
        await jarResource.clickbuttonFilter()
        await jarResource.clickTanggal()
        await expect(jarResource.date1).toHaveText('2024-07-01')
    })
    it('test case 13 - Filter Resource timesheets dengan time tidak valid', async function (){

    })
    it('test case 14 - Filter Resource timesheets dengan field kosong', async function (){
        
    })
    it('test case 15 - Filter Resource timesheets reset', async function (){
        await jarResource.clickbuttonFilter()
        await jarResource.clickReset()
        await expect(jarResource.date1).toHaveText('2024-06-24')
    })
    it('test case 16 - Button Silang Filter Resource timesheets', async function (){
        await jarResource.clickbuttonFilter()
        await jarResource.clickX1()
        await expect(jarResource.date1).toHaveText('2024-06-24')
    })
    it('test case 17 - Melihat timesheet details', async function (){
        await jarResource.clickButtonMata2()
        await expect(jarResource.textTSD).toHaveTextContaining('Townhall')
    })
    it('test case 18 - Kembali ke resource details dari timesheet detail', async function (){
        await jarResource.clickButtonBack()
        await expect(jarResource.date1).toHaveText('2024-06-24')
    })
    it.skip('test case 19 - Print resource timesheets dengan tanggal valid', async function (){ //masih salah
        await jarResource.clickButtonPrint()
        await jarResource.isiPrint()
        await expect(jarResource.popupPrint).toBeDisplayed()
        //await expect(jarResource.popupPrint).toHaveTextContaining('Timesheets printed successfully!')
    })
    it('test case 20 - Print resource timsheets dengan tanggal invalid', async function (){
        
    })
    it('test case 21 - Button cancel pada print resource timesheets', async function (){
        await jarResource.clickButtonPrint()
        await jarResource.clickCancelPrint()
        await expect(jarResource.date1).toHaveText('2024-06-24')
    })
    it('test case 22 - Button navigasi next list resource timesheets', async function (){
        await jarResource.clickNextNav()
        await expect(jarResource.date1).toHaveText('2024-07-04')
    })
})