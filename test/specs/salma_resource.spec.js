import {browser,expect} from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page.js'
import Resource3 from '../pageobjects/salma_resource.js'
import Placement2 from '../pageobjects/salma_placement.js'

describe('RESOURCE', function(){
    describe('Resource List', function () {
        beforeEach('User melakukan login', async function () {   
            await Resource3.openPage()
            await Placement2.login('dummy@prosigmaka.com','dummypsm')    
            await browser.pause(3000)
            await Placement2.clickTimesheet()
            await browser.pause(5000) 
            await Resource3.resourceList()
            await browser.pause(5000)
        })
    
        it('1 - (28) User add new resource dengan mengisi semua field secara valid', async function () { 
            await Resource3.newResource()
            await Resource3.formResource()
            await browser.pause(3000)
    
            await expect(Resource3.txtNew).toHaveText("salma")
        })     
    
        it('2 - (32) User klik button cancel pada add new resource', async function () { 
            await Resource3.newResource()
            await Resource3.canceledForm()
            await browser.pause(3000)
    
            await expect(Resource3.modalForm).not.toBeDisplayed()
        }) 
    
        it.only('3 - (40) User mengubah Data Resource berdasarkan 3 kondisi', async function () {  
            await Resource3.clickEdit() //trouble clear input
            await Resource3.editName()
            await Resource3.editNIP()
            await Resource3.editEmail()
            await Resource3.clickSubmitEdit()

            await expect(Resource3.txtNew).toHaveText("sal")

        }) 
    
        it.skip('4 - (41) User mengubah Data Resource berdasarkan 4 kondisi', async function () {  
            await Resource3.clickEdit() //trouble clear input
            await Resource3.editName()
            await Resource3.editNIP()
            await Resource3.editEmail()
            await Resource3.editContract()
            await Resource3.clickSubmitEdit()

            await expect(Resource3.txtContract).toHaveText("June 1, 2024")
            
        }) 
    
        it('5 - (42) User mengubah Data Resource tanpa mengubah apapun', async function () {  
            await Resource3.clickEdit()
            await browser.pause(2000)
            await Resource3.clickSubmitEdit()
            await browser.pause(5000)

            await expect(Resource3.txtEdit).toHaveText('apa')
        }) 
    
        it('6 - (43) User membatalkan mengubah data resource', async function () { 
            await Resource3.clickEdit()
            await Resource3.clickCancelEdit()
            await browser.pause(3000)

            await expect(Resource3.modalEdit).not.toBeDisplayed()
        })
        
    })
    
    describe.skip('Resource Details', function () {
        before('User melakukan login', async function () {   
            await Placement2.openPage()
            await Placement2.login('dummy@prosigmaka.com','dummypsm')
            await browser.pause(3000)
            await Placement2.clickTimesheet()
            await browser.pause(2000)
            await Resource3.resourceDetails() 
        })

    
        it('7 - (23) User menggunakan button previous navigasi resource timesheets', async function () {  
            await Resource3.checkNavLeft()
            await browser.pause(3000)

            await expect(Resource3.txt1).toHaveText('1')
        }) 
        
        it('8 - (24) User melihat Placement detail via Placement History', async function () {  
            await browser.pause(5000)
            await Resource3.checkDetailHistory()
            await browser.pause(5000)
    
            await expect(Resource3.txtPlacementDetail).toHaveText('Placement Detail')
        }) 
    
        it('9 - (25) User menggunakan button next navigasi menu placement history', async function () {  
            await Resource3.checkNavRightHistory()
            await browser.pause(3000)
    
            await expect(Resource3.txtHistory).toHaveText('2')
        }) 
    
        it('10 - (26) User menggunakan button previous navigasi menu placement history', async function () {  
            await Resource3.checkNavLeftHistory()
            await browser.pause(3000)
    
            await expect(Resource3.txtHistory).toHaveText('1')
        }) 
        
        it('11 - (27) User kembali ke halaman resource list menggunakan tombol Back', async function () {  
            await Resource3.backResourceDetail()
            await browser.pause(3000)
    
            await expect(Resource3.txtBack).toHaveText('Resource List')
        }) 
    
    })
})


