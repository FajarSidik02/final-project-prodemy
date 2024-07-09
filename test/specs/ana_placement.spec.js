import { $,expect, browser } from '@wdio/globals'
import anaPlacement from '../pageobjects/ana_placement.js';

describe ("Test Case Placement 49-73", function(){
    before('User harus login',async function() {
        await anaPlacement.openPage()
        await browser.pause(2000)
        await anaPlacement.login('dummy@prosigmaka.com','dummypsm')
        await browser.pause(3000)
        await anaPlacement.openTimesheet()
        await browser.pause(5000)
        await anaPlacement.openPlacement()
    })
    it.skip('tc 48 - User menambahkan resource baru pada placement update dengan email yang tidak valid', async function(){

    })
    it ('tc 49 - User menambahkan client via placement update', async function(){
        await anaPlacement.openUpdate()
        await browser.pause(4000)
        await anaPlacement.addClient()
        await browser.pause(2000)
        await anaPlacement.setClient('Paragon')
        await browser.pause(3000)
        await anaPlacement.subClient()

    })
})