import { $,expect, browser } from '@wdio/globals'
import jarPlacement from '../pageobjects/fajar_placement.js'
import jarResource from '../pageobjects/fajar_resource.js'
describe ('Test Case 1 -24', function(){
    before('User login', async function (){
        await jarPlacement.openPage()
        await jarPlacement.login('dummy@prosigmaka.com','dummypsm')
        await browser.pause(3000)
        await jarPlacement.openTimesheet()
        await browser.pause(6000)
        await jarResource.clickButtonResource()
    })

    it('test case 13 - ', async function (){ 

    })
    it('test case 14', async function (){

    })
    it('test case 15 ', async function (){

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

})