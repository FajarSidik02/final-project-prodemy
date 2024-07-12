import {browser,expect} from '@wdio/globals'
import Placement2 from '../pageobjects/salma_placement.js'
// import LoginPage from '../pageobjects/login.page.js'

describe('PLACEMENT', function(){
    describe.skip('Placement Detail', function () {
        before('User melakukan login', async function () {   
            await Placement2.openPage()
            await browser.pause(3000) 
            await Placement2.login('dummy@prosigmaka.com', 'dummypsm')
            await browser.pause(3000)
            await Placement2.clickTimesheet() 
            await browser.pause(2000)
            await Placement2.placementDetail()
        })
    
        it('1 - (25) User melakukan filtrasi data berdasarkan tanggal yang valid', async function () {  
            await Placement2.filterDetail()
            await Placement2.clickStartField()
            await Placement2.setStartDate()
            await Placement2.clickEndField()
            await Placement2.setEndDate()
            await browser.pause(2000)
            await Placement2.clickFilter()            
            await Placement2.clickXFilter()            
            await browser.pause(3000)
                
            await expect(Placement2.txtFilter).toHaveText('2024-06-28')
            
        })
    
        it('2 - (27) User melakukan reset filter data pada halaman view detail', async function () {  
            await Placement2.filterDetail()
            await Placement2.clickStartField()
            await Placement2.setStartDate()
            await Placement2.clickEndField()
            await Placement2.setEndDate()
            await browser.pause(3000)
            await Placement2.clickFilter()
            await Placement2.ClickResetFilter()
            await browser.pause(3000)

            await expect(Placement2.txtResetFIlter).toHaveText('2024-07-02')
        })
    
        it('3 - (28) User melakukan view detail pada salah satu view detail timesheet', async function () {  
            await Placement2.detailRelated()
            await browser.pause(5000)
    
    
            await expect(Placement2.txtTimesheetDetail).toHaveText(expect.stringContaining('2024-07-02')) 
        })
    
        it('4 - (30) User melakukan print timesheet dengan tanggal yang valid', async function () {  
            await Placement2.clickPrintIcon()
            await browser.pause(3000)
            await Placement2.clickStartPrint()
            await Placement2.setStartDate()
            await Placement2.clickEndPrint()
            await Placement2.setEndDate()
            await browser.pause(3000)
            await Placement2.clickPrintBtn()
            await browser.pause(3000)
            
            await expect(Placement2.txtPrint).toBeDisplayed()
        })
    
        it('5 - (32) User melakukan klik button cancel pada halaman print', async function () { 
            await browser.pause(3000) 
            await Placement2.clickPrintIcon()
            await browser.pause(3000)
            await Placement2.canceledPrint()
    
            await expect(Placement2.modalPrint).not.toBeDisplayed()
        })
    
        it('6 - (33) User melakukan klik button navigasi pada kolom timesheet untuk berpindah ke halaman selanjutnya', async function () {  
            await browser.scroll(0, 500)
            await Placement2.clickNavRight()
            await browser.pause(3000)
    
            await expect(Placement2.txt2).toHaveText('2')
        })
    
        it('7 - (34) User melakukan klik button navigasi pada kolom timesheet untuk berpindah ke halaman sebelumnya', async function () { 
            await Placement2.clickNavLeft()
            await browser.pause(3000)
    
            await expect(Placement2.txt1).toHaveText('1')
        })    

        it('8 - (29) User klik button back pada halaman timesheet detail', async function () {           
            await Placement2.detailRelated()
            await browser.pause(3000)
            await Placement2.backTSDetail()
            await browser.pause(5000)

            await expect(Placement2.txtBack).toHaveText('Placement Detail')
        })   
        
    })
    
    
    describe('Placement Update', function () {
        before('User melakukan login', async function () {   
            await Placement2.openPage()
            await Placement2.login('dummy@prosigmaka.com','dummypsm')
            await browser.pause(3000) 
            await Placement2.clickTimesheet()
            await browser.pause(2000)
            await Placement2.placementUpdate()  
        })
            
        it('9 - (35) User mengedit placement dengan mengupdate nama resource', async function () {  
            await Placement2.changeName()
            await browser.pause(2000)
            await Placement2.realDataClient()
            await browser.pause(3000)
            await Placement2.realDataPosition()
            await Placement2.clickSubmitUpdate()
            await browser.pause(3000)

            await expect(Placement2.txtNameUpdate).not.toHaveText('testerz')
        })    
    
        it('10 - (36) User mengedit placement dengan mengupdate nama client', async function () {  
            await Placement2.realDataName()
            await browser.pause(2000)
            await Placement2.changeClient()
            await browser.pause(2000)
            await Placement2.realDataPosition()
            await Placement2.clickSubmitUpdate()
            await browser.pause(3000)

            await expect(Placement2.txtClientUpdate).not.toHaveText('Ecomindo')
        })    
    
        it('11 - (38) User mengedit placement dengan mengupdate tanggal PRF dibuat', async function () {  
            await Placement2.realDataName()
            await browser.pause(2000)
            await Placement2.realDataClient()
            await browser.pause(2000)
            await Placement2.changePRFDate()
            await browser.pause(2000)
            await Placement2.realDataPosition()
            await Placement2.clickSubmitUpdate()
            await browser.pause(3000)
            await Placement2.clickDetail()
            await browser.pause(3000)

            await expect(Placement2.txtPRFDate).toHaveText(expect.stringContaining('June 26, 2024'))

        })  
    
        it('12 - (40) User mengedit placement dengan mengupdate position', async function () {  
            await Placement2.realDataName()
            await browser.pause(2000)
            await Placement2.realDataClient()
            await browser.pause(2000)
            await Placement2.changePosition()
            await Placement2.clickSubmitUpdate()
            await browser.pause(3000)
            await Placement2.clickDetail()
            await browser.pause(3000)

            await expect(Placement2.txtPosition).not.toHaveText(expect.stringContaining('.NET Developer'))
        })    
    
        //error di  input change
        it.only('13 - (41) User mengedit placement dengan mengupdate placement location', async function () {  
            await Placement2.realDataName()
            await browser.pause(2000)
            await Placement2.realDataClient()
            await browser.pause(2000)            
            await Placement2.realDataPosition()
            await Placement2.changePlacementLoc('Jogjakarta')
            await Placement2.clickSubmitUpdate()
            await browser.pause(3000)
            await Placement2.clickDetail()
            await browser.pause(3000)

            await expect(Placement2.txtPlacementLoc).toHaveText(expect.stringContaining('Jogjakarta'))
        })    
    
        it('14 - (42) User mengedit placement dengan mengupdate type', async function () {  
            await Placement2.realDataName()
            await browser.pause(2000)
            await Placement2.realDataClient()
            await browser.pause(2000)
            await Placement2.realDataPosition()
            await Placement2.changeType()
            await Placement2.clickSubmitUpdate()
            await browser.pause(3000)
            await Placement2.clickDetail()
            await browser.pause(3000)

            await expect(Placement2.txtType).toHaveText(expect.stringContaining('New'))
        })    
    
        it('15 - (43) User mengedit placement dengan mengupdate status', async function () {  
            await Placement2.realDataName()
            await browser.pause(2000)
            await Placement2.realDataClient()
            await browser.pause(2000)
            await Placement2.realDataPosition()
            await Placement2.changeStatus()
            await Placement2.clickSubmitUpdate()
            await browser.pause(3000)
            await Placement2.clickDetail()
            await browser.pause(3000)

            await expect(Placement2.txtStatus).toHaveText(expect.stringContaining('Active'))
        })    
    
        it('16 - (44) User mengedit placement dengan mengupdate return date', async function () {  
            await browser.pause(2000)
            await Placement2.realDataName()
            await browser.pause(2000)
            await Placement2.realDataClient()
            await browser.pause(2000)
            await Placement2.realDataPosition()
            await browser.pause(3000)
            await browser.scroll(0, 500)
            await Placement2.setReturnDate() 
            await Placement2.clickSubmitUpdate()
            await browser.pause(3000)
            await Placement2.clickDetail()
            await browser.pause(3000)

            await expect(Placement2.txtReturnDate).toHaveText(expect.stringContaining('June 28, 2024'))
        })    
    
        it('17 - (45) User mengedit placement dengan mengupdate return reason', async function () {  
            await Placement2.realDataName()
            await browser.pause(2000)
            await Placement2.realDataClient()
            await browser.pause(2000)
            await Placement2.realDataPosition()
            await Placement2.inputReturnReason() 
            await Placement2.clickSubmitUpdate()
            await browser.pause(3000)
            await Placement2.clickDetail()
            await browser.pause(3000)

            await expect(Placement2.txtReturnReason).toHaveText(expect.stringContaining('Sakit'))
        })    
    
        it('18 - (46) User cancel edit placement update', async function () {  
            await Placement2.cancelPUpdate()
            await browser.pause(5000)

            await expect(Placement2.txtCancel).toHaveText('Placement List')
        })    
    
        
    })
})

