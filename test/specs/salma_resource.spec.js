import {browser,expect} from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import Resource3 from '../pageobjects/salma_resource.js'
import Placement2 from '../pageobjects/salma_placement.js'

describe('RESOURCE', function(){
    describe('Resource List', function () {
        beforeEach('User melakukan login', async function () {   
            await LoginPage.openPage()
            await LoginPage.login('dummy@prosigmaka.com','dummypsm')    
            await browser.pause(3000)
            await Placement2.clickTimesheet()
            await browser.pause(5000) 
            await Resource3.resourceList()
            await browser.pause(5000)
        })

        afterEach( async function () {   
            await browser.reloadSession()
            
        })
    
        it('1 - User add new resource dengan mengisi semua field secara valid', async function () { //passed  
            await Resource3.newResource()
            await Resource3.formResource()
            await browser.pause(3000)
    
            await expect(Resource3.txtNew).toHaveText("salma")
        })     
    
        it('2 - User klik button cancel pada add new resource', async function () { //passed 
            await Resource3.newResource()
            await Resource3.canceledForm()
            await browser.pause(3000)
    
            await expect(Resource3.modalForm).not.toBeDisplayed()
        }) 
    
        it.skip('3 - User mengubah Data Resource berdasarkan 3 kondisi', async function () {  
            await Resource3.clickEdit() //trouble clear input
            await Resource3.editName()
            await Resource3.editNIP()
            await Resource3.editEmail()
            await Resource3.clickSubmitEdit()

            await expect(Resource3.txtNew).toHaveText("sal")

        }) 
    
        it.skip('4 - User mengubah Data Resource berdasarkan 4 kondisi', async function () {  
            await Resource3.clickEdit()
        }) 
    
        it('5 - User mengubah Data Resource tanpa mengubah apapun', async function () {  
            await Resource3.clickEdit()
            await Resource3.clickSubmitEdit()

            //alert
        }) 
    
        it('6 - User membatalkan mengubah data resource', async function () {  //passed
            await Resource3.clickEdit()
            await Resource3.clickCancelEdit()
            await browser.pause(3000)

            await expect(Resource3.modalForm).not.toBeDisplayed()
        })
        
    })
    
    describe.skip('Resource Details', function () {
        beforeEach('User melakukan login', async function () {   
            await LoginPage.openPage()
            await LoginPage.login('dummy@prosigmaka.com','dummypsm')    
            await browser.pause(3000)
            await Placement2.clickTimesheet()
            await browser.pause(2000)
            await Resource3.resourceDetails() //data listnya beda
        })

        // afterEach( async function () {   
        //     await browser.reloadSession()
            
        // })
    
        it('7 - User menggunakan button previous navigasi resource timesheets', async function () {  //passed > posisi row data sudah berubah
            await Resource3.checkNavLeft()
            await browser.pause(3000)

            await expect(Resource3.txt1).toHaveText('1')
        }) 
        
        it('8 - User melihat Placement detail via Placement History', async function () {  //passed > isian data sudah berubah
            await browser.pause(5000)
            await Resource3.checkDetailHistory()
            await browser.pause(5000)
    
            await expect(Resource3.txtPlacementDetail).toHaveText('Placement Detail')
        }) 
    
        it.skip('9 - User menggunakan button next navigasi menu placement history', async function () {  
            await Resource3.checkNavRightHistory()
            await browser.pause(3000)
    
            await expect(Resource3.txt2History).toHaveText('2')
        }) 
    
        it.skip('10 - User menggunakan button previous navigasi menu placement history', async function () {  
            await Resource3.checkNavLeftHistory()
            await browser.pause(3000)
    
            await expect(Resource3.txt1History).toHaveText('1')
        }) 
        
        it('11 - User kembali ke halaman resource list menggunakan tombol Back', async function () {  //passed
            await Resource3.backResourceDetail()
            await browser.pause(3000)
    
            await expect(Resource3.txtBack).toHaveText('Resource List')
        }) 
    
    })
})


