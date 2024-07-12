import { $,expect, browser } from '@wdio/globals'
import anaPlacement from '../pageobjects/ana_placement.js';

describe ("Test Case Placement 49-73", function(){
    before('User harus login',async function() {
        await anaPlacement.openPage()
        await browser.pause(2000)
        await anaPlacement.login('dummy@prosigmaka.com','dummypsm')
        await browser.pause(5000)
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
        await anaPlacement.setClient('tes Client')
        await browser.pause(3000)
        await anaPlacement.subClient()
    })
    //negatif
    it.skip ('tc 50 - User menambahkan client via placement update tanpa mengisi field nama', async function(){
        await anaPlacement.openUpdate()
        await browser.pause(4000)
        await anaPlacement.addClient()
        await browser.pause(3000)
        await anaPlacement.subClient()
    })
    it ('tc 51 - User batal menambahkan client via placement update', async function(){
        await anaPlacement.addClient()
        await browser.pause(2000)
        await anaPlacement.xClient()
        await browser.pause(5000)
    })
    it ('tc 52 - User menambahkan position via placement update', async function(){
        await anaPlacement.addPosition()
        await browser.pause(2000)
        await anaPlacement.setPosition('test position')
        await browser.pause(2000)
        await anaPlacement.subPosition()
        await browser.pause(3000)

    })
    //negatif
    it.skip ('tc 53 - User menambahkan position via placement update tanpa mengisi field nama', async function(){
        await anaPlacement.addPosition()
        await browser.pause(2000)
        await anaPlacement.subPosition()
        await browser.pause(3000)
    })
    it ('tc 54 - User batal menambahkan position via placement update menggunakan button cancel', async function(){
        await anaPlacement.addPosition()
        await browser.pause(2000)
        await anaPlacement.cancelPosition()
        await browser.pause(2000)
    })
    it.skip ('tc 55 - User batal menambahkan position via placement update menggunakan button silang', async function(){
    })
    it ('tc 56 - User kembali ke halaman placement list menggunakan button back dari halaman placement update', async function(){
        await anaPlacement.backPlacement()
        await browser.pause(2000)
    })
    //blocked
    // it ('tc 57 - User menambahkan placement dengan mengisi semua field menggunakan data yang valid', async function(){
    //     await anaPlacement.newPlacementClick()
    //     await browser.pause(3000)
    //     await anaPlacement.newPlacementResource()

    // })
    
    it.skip ('tc 58 - User menambahkan placement dengan mengosongkan seluruh field', async function(){
    })
    it.skip ('tc 59 - User menambahkan placement dengan mengisi semua field dan field PRF dengan data yang invalid', async function(){
    })
    it ('tc 60 - User cancel add new placement', async function(){
        await anaPlacement.newPlacementPage()
        await browser.pause(2000)
        await anaPlacement.cancelNewPlacementPage()
        await expect(anaPlacement.xPlacementList).toHaveText('Placement List')
    })

    //tombol submit gabisa diklik
    it.skip ('tc 61 - User menambahkan resource baru pada new placement form', async function(){
        await anaPlacement.newPlacementPage()
    })
    it.skip ('tc 62 - User menambahkan resource baru pada new placement form dengan email yang tidak valid', async function(){
    })
    it.skip ('tc 63 - User menambahkan client via new placement form', async function(){
        await anaPlacement.newPlacementPage()
        await anaPlacement.addClientNP()
        await browser.pause(2000)
        await anaPlacement.setClientNP('Maxi Tani')
        await anaPlacement.subClientNP()
        await browser.pause(2000)
        await expect(anaPlacement.xNewPlacement).toHaveText('New Placement Form')
    })
    it.skip ('tc 64 - User menambahkan client via new placement form tanpa mengisi field nama', async function(){
    })
    it ('tc 65 - User batal menambahkan client via new placement form', async function(){
        await anaPlacement.newPlacementPage()
        await anaPlacement.addClientNP()
        await browser.pause(2000)
        await anaPlacement.xClientNP()
        await browser.pause(2000)
        await expect(anaPlacement.xNewPlacement).toHaveText('New Placement Form')
    })
    it ('tc 66 - User menambahkan position via new placement form', async function(){
        // await anaPlacement.newPlacementPage()
        await anaPlacement.addPositionNP()
        await browser.pause(2000)
        await anaPlacement.setPositionNP('Laravel Dev')
        await anaPlacement.subPositionNP()
        await browser.pause(2000)
        await expect(anaPlacement.xNewPlacement).toHaveText('New Placement Form')
    })
    it.skip ('tc 67 - User menambahkan position via new placement form tanpa mengisi field nama', async function(){
    })

    it ('tc 68 - User batal menambahkan position via new placement form menggunakan button silang', async function(){
        // await anaPlacement.newPlacementPage()
        await anaPlacement.addPositionNP()
        await browser.pause(2000)
        await anaPlacement.xPositionNP()
        await browser.pause(2000)
        await expect(anaPlacement.xNewPlacement).toHaveText('New Placement Form')
    })
    it ('tc 69 - User batal menambahkan position via placement update menggunakan button cancel', async function(){
        // await anaPlacement.newPlacementPage()
        await browser.pause(2000)
        await anaPlacement.cancelNewPlacementPage()
        await expect(anaPlacement.xPlacementList).toHaveText('Placement List')
    })
    it ('tc 70 - User kembali ke halaman placement list menggunakan button back dari halaman new placement form', async function(){
        await anaPlacement.newPlacementPage()
        await browser.pause(2000)
        await anaPlacement.backNewPlacement()
        await browser.pause(2000)
        await expect(anaPlacement.xPlacementList).toHaveText('Placement List')
    })



})