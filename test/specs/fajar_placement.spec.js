import { $,expect, browser } from '@wdio/globals'
import jarPlacement from '../pageobjects/fajar_placement.js'

describe ('Test Case 1 -24', function(){
    before('User login', async function (){
        await jarPlacement.openPage()
        await browser.setWindowSize(1920,1080)
        await jarPlacement.login('dummy@prosigmaka.com','dummypsm')
        await browser.pause(2000)
        await jarPlacement.openTimesheet()
        await browser.pause(2000)
        await jarPlacement.openPlacement()
    })

    it('test case 1 - Searching by PRF', async function (){ //PASSED
        await jarPlacement.writeSearchBar('1235')
        await expect(jarPlacement.prf1).toHaveText('1235')
        await jarPlacement.clickXSearch()
        await browser.pause(5000)
    })
    it.skip('test case 2 - Searching by Client Name', async function (){
        await jarPlacement.writeSearchBar('Astra International')
        await expect(jarPlacement.prf1).toHaveText('{}')
    })
    it.skip('test case 3 - Searching by Resource Name', async function (){
        await jarPlacement.writeSearchBar('testerz')
        await expect(JSON.stringify(jarPlacement.prf1)).toHaveText('{}')

    })
    it.skip('test case 4 - Searching by Position', async function (){
        await jarPlacement.writeSearchBar('laravel')
        await expect(JSON.stringify(jarPlacement.prf1)).toHaveText('{}')

    })
    it.skip('test case 5 - Searching by Type', async function (){
        
    })
    it.skip('test case 6 - Searching by Status', async function (){
        
    })
    it('test case 7 - Filtered by Client ', async function (){ // PASSED
        await jarPlacement.clickFilterButton()
        await jarPlacement.clickDropDownFilter1()
        await browser.pause(2000)
        await jarPlacement.clickMobbi()
        await browser.pause(1000)
        await jarPlacement.clickFilterButton2()
        await browser.pause(2000)
        await expect(jarPlacement.prf1).toHaveText('1237')
    })
    it('test case 8 - Filtered by Resource', async function (){ //passed
        await jarPlacement.clickFilterButton()
        await jarPlacement.clickbuttonX1()
        await jarPlacement.clickDropDownFilter2()
        await browser.pause(2000)
        await jarPlacement.clickResName()
        await browser.pause(1000)
        await jarPlacement.clickFilterButton2()
        await browser.pause(2000)
        await expect(jarPlacement.prf1).toHaveText('1237')
    })
    it('test case 9 - Filtered by Position', async function (){//passed
        await jarPlacement.clickFilterButton()
        await jarPlacement.clickbuttonX1()
        await jarPlacement.clickDropDownFilter3()
        await browser.pause(2000)
        await jarPlacement.clickPosName()
        await browser.pause(1000)
        await jarPlacement.clickFilterButton2()
        await browser.pause(2000)
        await expect(jarPlacement.prf1).toHaveText('1239')
    })
    it('test case 10 - Filtered by Type', async function (){//passed
        await jarPlacement.clickFilterButton()
        await jarPlacement.clickbuttonX1()
        await jarPlacement.clickDropDownFilter4()
        await jarPlacement.clickTypeName()
        await jarPlacement.clickFilterButton2()
        await expect(jarPlacement.prf1).toHaveText('1237')
    })
    it('test case 11 - Filtered by Status', async function (){//passed
        await jarPlacement.clickFilterButton()
        await jarPlacement.clickbuttonX1()
        await jarPlacement.clickDropDownFilter5()
        await jarPlacement.clickstatusname()
        await jarPlacement.clickFilterButton2()
        await expect(jarPlacement.prf1).toHaveText('1239')
    })
    it('test case 12 - Filtered by 2 Condition', async function (){//passed
        await jarPlacement.clickFilterButton()
        await jarPlacement.clickbuttonX1()
        await jarPlacement.clickDropDownFilter1()
        await jarPlacement.clickMobbi()
        await jarPlacement.clickDropDownFilter2()
        await jarPlacement.clickResName()
        await jarPlacement.clickFilterButton2()
        await expect(jarPlacement.prf1).toHaveText('1237')
    })
    it('test case 13 - Filtered by 3 Condition', async function (){//passed
        await jarPlacement.clickFilterButton()
        await jarPlacement.clickDropDownFilter3()
        await jarPlacement.clickPosName()
        await jarPlacement.clickFilterButton2()
        await expect(jarPlacement.prf1).toHaveText('1237')
    })
    it('test case 14 - Filtered by 4 Condition', async function (){//passed
        await jarPlacement.clickFilterButton()
        await jarPlacement.clickDropDownFilter4()
        await jarPlacement.clickTypeName()
        await jarPlacement.clickFilterButton2()
        await expect(jarPlacement.prf1).toHaveText('1237')
    })
    it('test case 15 - Filtered by 5 Condition', async function (){//passed
        await jarPlacement.clickFilterButton()
        await jarPlacement.clickDropDownFilter5()
        await jarPlacement.clickstatusname()
        await jarPlacement.clickFilterButton2()
        await expect(jarPlacement.prf1).toHaveText('1237')
    })
    it('test case 18 - Reset Filter', async function (){//passed
        await jarPlacement.clickFilterButton()
        await jarPlacement.clickbuttonreset()
        await expect(jarPlacement.prf1).toHaveText('1239')

    })
    it('test case 16 - Filtered Without Condition', async function (){//passed
        await jarPlacement.clickFilterButton()
        await jarPlacement.clickFilterButton2()
        await expect(jarPlacement.prf1).toHaveText('1239')
    })
    it('test case 17 - Cancelling Filtration', async function (){//passed
        await jarPlacement.clickFilterButton()
        await jarPlacement.clickbuttonXfilter()
        await expect(jarPlacement.prf1).toHaveText('1239')
    })
    it('test case 20 - Searching on Filter With Invalid Keyword ', async function (){//passed
        await jarPlacement.clickFilterButton()
        await jarPlacement.clickDropDownFilter1()
        await jarPlacement.isisearchfilter('mobbo')
        await expect(jarPlacement.searchfailed).toHaveText('No Results Found')
    })
    it('test case 19 - Searching on Filter With Valid Keyword', async function (){//passed
        await jarPlacement.isisearchfilter('mobbi')
        await expect(jarPlacement.searchfound).toHaveText('Mobbi')
    })
    
    it.skip('test case 21 - Delete Search Keyword', async function (){
        await jarPlacement.clickCloseSearch()
        await expect
    })
    it.only('test case 22 - Delete Placement' , async function (){
        // await jarPlacement.clickbuttonXfilter()
        await jarPlacement.clickButtonDelete()
        await jarPlacement.clickButtonDelete2()
        await expect(jarPlacement.prf1).toHaveText('1239')

    })
    it('test case 23 - Cancel Delete Placement', async function (){//passed
        await jarPlacement.clickButtonDelete()
        await jarPlacement.clickcanceldelete()
        await expect(jarPlacement.prf1).toHaveText('123456')

    })
    it('test case 24 - View Detail', async function (){//passed
        await jarPlacement.clickdata1()
        await jarPlacement.clickviewdetail()
        await expect (browser).toHaveUrl('https://timesheet.app.prosigmaka.com/app/timesheet-admin/placement-detail-659f5b33d90d8b3224f1c2c4?id=e5750a55-399a-41a4-8968-b2114bdf8803&pageID=Placement%20List')
    })


})