import { $,expect, browser } from '@wdio/globals'
import jarPlacement from '../pageobjects/fajar_placement.js'
import jarResource from '../pageobjects/fajar_resource.js'
describe ('Test Case 1 -24', function(){
    before('User login', async function (){
        await jarPlacement.openPage()
        await jarPlacement.login('dummy@prosigmaka.com','dummypsm')
        await browser.pause(2000)
        await jarPlacement.openTimesheet()
        await browser.pause(6000)
        await jarPlacement.openPlacement()
    })

    it('test case 1 ', async function (){ 

    })
    it('test case 2', async function (){

    })
    it('test case 3 ', async function (){

    })
    it('test case 4', async function (){

    })
    it('test case 5', async function (){
        
    })
    it('test case 6', async function (){
        
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


})