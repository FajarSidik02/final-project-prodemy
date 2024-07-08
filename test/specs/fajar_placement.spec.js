import { $,expect, browser } from '@wdio/globals'
import jarPlacement from '../pageobjects/fajar_placement.js'

describe ('Test Case 1 -24', function(){
    before('User login', async function (){
        await jarPlacement.openPage()
        await jarPlacement.login('dummy@prosigmaka.com','dummypsm')
        await browser.pause(2000)
        await jarPlacement.openTimesheet()
        await browser.pause(6000)
        await jarPlacement.openPlacement()
    })

    it('test case 1 - Searching by PRF', async function (){ //PASSED
        await jarPlacement.writeSearchBar('1235')
        await expect(jarPlacement.prf1).toHaveText('1235')
    })
    it.skip('test case 2 - Searching by Client Name', async function (){
        await jarPlacement.writeSearchBar('Astra International')
        await expect(jarPlacement.prf1).toHaveText({})
    })
    it.skip('test case 3 - Searching by Resource Name', async function (){
        await jarPlacement.writeSearchBar('testerz')
        await expect(JSON.stringify(jarPlacement.prf1)).toHaveText('{}')

    })
    it.skip('test case 4 - Searching by Position', async function (){
        await jarPlacement.writeSearchBar('laravel')
        await expect(JSON.stringify(jarPlacement.prf1)).toHaveText('{}')

    })
    it('test case 5 - Searching by Type', async function (){
        
    })
    it('test case 6 - Searching by Status', async function (){
        
    })
    it('test case 7', async function (){
        
    })
    it('test case 8', async function (){
        
    })
    it('test case 9', async function (){
        
    })
    it('test case 10', async function (){
        
    })
    it('test case 11', async function (){
        
    })
    it('test case 12', async function (){
        
    })
    it('test case 13', async function (){
        
    })
    it('test case 14', async function (){
        
    })
    it('test case 15', async function (){
        
    })
    it('test case 16', async function (){
        
    })
    it('test case 17', async function (){
        
    })
    it('test case 18', async function (){
        
    })
    it('test case 19', async function (){
        
    })
    it('test case 20', async function (){
        
    })
    it('test case 21', async function (){
        
    })
    it('test case 22', async function (){
        
    })
    it('test case 23', async function (){
        
    })
    it('test case 24', async function (){
        
    })


})