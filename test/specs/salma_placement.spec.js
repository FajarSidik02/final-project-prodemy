import {browser,expect} from '@wdio/globals'
import Placement2 from '../pageobjects/salma_placement.js'
// import LoginPage from '../pageobjects/login.page.js'

describe('PLACEMENT', function(){
    describe('Placement Detail', function () {
        beforeEach('User melakukan login', async function () {   
            await Placement2.openPage()
            await browser.pause(3000) 
            await Placement2.login()
            await browser.pause(3000)
            await Placement2.clickTimesheet() 
            await browser.pause(2000)
            await Placement2.placementDetail()
        })
        // afterEach( async function () {   
        //     await browser.reloadSession()
            
        // })
    
        it.skip('1 - User melakukan filtrasi data berdasarkan tanggal yang valid', async function () {  
            await Placement2.filterDetail()
            await Placement2.clickStartField()
            await Placement2.setStartDate()
            await Placement2.clickEndField()
            await Placement2.setEndDate()
            await browser.pause(3000)
            await Placement2.clickFilter()
            await browser.pause(3000)
            
    
            //assert > error
            await expect(Placement2.txtFilter).toEqual('filtered successfully!')
            
        })
    
        it.only('2 - User melakukan reset filter data pada halaman view detail', async function () {  //passed
            await Placement2.filterDetail()
            await Placement2.clickStartField()
            await Placement2.setStartDate()
            await Placement2.clickEndField()
            await Placement2.setEndDate()
            await browser.pause(3000)
            await Placement2.clickFilter()
            await Placement2.canceledFilter()
            await browser.pause(3000)

            await expect(Placement2.txtCancelFIlter).toHaveText('2024-06-24')
        })
    
        it('3 - User melakukan view detail pada salah satu view detail timesheet', async function () {  //passed
            await Placement2.detailRelated()
            await browser.pause(5000)
    
    
            await expect(Placement2.txtTimesheetDetail).toHaveText(': 2024-06-24') //pake contains aja
        })
    
        it.skip('4 - User melakukan print timesheet dengan tanggal yang valid', async function () {  
            await Placement2.clickPrintIcon()
            await browser.pause(3000)
            await Placement2.clickStartPrint()
            await Placement2.setStartDate()
            await Placement2.clickEndPrint()
            await Placement2.setEndDate()
            await browser.pause(3000)
            await Placement2.clickPrintBtn()
            await browser.pause(3000)

            // const handleAlert = browser.getAlertText()
            // console.log(handleAlert)

            //expect handling alert
            // await expect(Placement2.handlingAlertPrint).toHaveText('successfully')


        })
    
        it('5 - User melakukan klik button cancel pada halaman print', async function () { //passed
            await browser.pause(3000) 
            await Placement2.clickPrintIcon()
            await browser.pause(3000)
            await Placement2.canceledPrint()
    
            await expect(Placement2.modalPrint).not.toBeDisplayed()
        })
    
        it('6 - User melakukan klik button navigasi pada kolom timesheet untuk berpindah ke halaman selanjutnya', async function () { //passed 
            await browser.scroll(0, 500)
            await Placement2.clickNavRight()
            await browser.pause(3000)
    
            await expect(Placement2.txt2).toHaveText('2')
        })
    
        it('7 - User melakukan klik button navigasi pada kolom timesheet untuk berpindah ke halaman sebelumnya', async function () { //passed
            await Placement2.clickNavLeft()
            await browser.pause(3000)
    
            await expect(Placement2.txt1).toHaveText('1')
        })    

        it('8 - User klik button back pada halaman timesheet detail', async function () {      //passed     
            await Placement2.detailRelated()
            await Placement2.backTSDetail()
            await browser.pause(5000)

            await expect(Placement2.txtBack).toHaveText('Placement Detail')
        })   
        
    })
    
    
    describe('Placement Update', function () {
        beforeEach('User melakukan login', async function () {   
            await Placement2.openPage()
            await Placement2.login('dummy@prosigmaka.com','dummypsm')
            await browser.pause(3000) 
            await Placement2.clickTimesheet() //?
            await browser.pause(2000)
            await Placement2.placementUpdate()  
        })
        after( async function () {   
            await browser.reloadSession()
            
        })
    
        it.skip('9 - User mengedit placement dengan mengupdate nama resource', async function () {  
            
        })    
    
        it.skip('10 - User mengedit placement dengan mengupdate nama client', async function () {  
            
        })    
    
        it.skip('11 - User mengedit placement dengan mengupdate tanggal PRF dibuat', async function () {  
            
        })  
    
        it.skip('12 - User mengedit placement dengan mengupdate position', async function () {  
            
        })    
    
        it.skip('13 - User mengedit placement dengan mengupdate placement location', async function () {  
            
        })    
    
        it.skip('14 - User mengedit placement dengan mengupdate type', async function () {  
            
        })    
    
        it.skip('15 - User mengedit placement dengan mengupdate status', async function () {  
            
        })    
    
        it.skip('16 - User mengedit placement dengan mengupdate return date', async function () {  
            
        })    
    
        it.skip('17 - User mengedit placement dengan mengupdate return reason', async function () {  
            
        })    
    
        it('18 - User cancel edit placement update', async function () {  //passed
            await Placement2.cancelPUpdate()
            await browser.pause(5000)

            await expect(Placement2.txtCancel).toHaveText('Placement List')
        })    
    
        
    })
})

