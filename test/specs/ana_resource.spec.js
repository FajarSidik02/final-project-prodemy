import { $,expect, browser } from '@wdio/globals'
import anaResource from '../pageobjects/ana_resource.js';

describe ("Test Case Resource 1-11", function(){
    before('User harus login',async function() {
        await anaResource.openPage()
        await browser.pause(2000)
        await anaResource.login('dummy@prosigmaka.com','dummypsm')
        await browser.pause(5000)
        await anaResource.openTimesheet()
        await browser.pause(5000)
        await anaResource.openResource()
    })

    it('tc 1 - User melakukan search pada halaman resource list berdasarkan NIP', async function(){
        await anaResource.typeSearch('1093')
        await expect(anaResource.xNip).toHaveText('1093')
        await browser.pause(3000)
    })
    it('tc 2 - User melakukan search pada halaman resource list berdasarkan Nama', async function(){
        await anaResource.typeSearch('testerz')
        await expect(anaResource.xNama).toHaveText('testerz')
        await browser.pause(3000)
    })
    it.skip ('tc 3 - User melakukan search pada halaman resource list berdasarkan Email', async function(){

    })
    it.skip ('tc 4 - User melakukan search pada halaman resource list berdasarkan Contract Start', async function(){

    })
    it.skip ('tc 5 - User melakukan search pada halaman resource list berdasarkan Contract End', async function(){

    })
    it.skip ('tc 6 - User melakukan search pada halaman resource list berdasarkan Status', async function(){

    })
    it.skip ('tc 7 - User menghapus satu data resource', async function(){
        await anaResource.xSearch()
        await browser.pause(3000)
        await anaResource.deleteResource()
        await browser.pause(3000)
        await anaResource.confDelResource()
    })
    it ('tc 8 - User membatalkan penghapusan data resource', async function(){
        await anaResource.xSearch()
        await anaResource.deleteResource()
        await browser.pause(3000)
        await anaResource.cancelDeleteResource()
        await browser.pause(2000)
        await expect(anaResource.xResourceList).toHaveText('Resource List')
    })
    it ('tc 9 - User menggunakan button next navigasi resource list', async function(){
        await anaResource.nextNavigasi()
        await browser.pause(3000)
        await expect(anaResource.xNext).toHaveText('2')
    })
    it ('tc 10 - User menggunakan button previous navigasi resource list', async function(){
        await anaResource.PreviousNavigasi()
        await browser.pause(3000)
        await expect(anaResource.xPrevious).toHaveText('1')
    })
    it ('tc 11 - User melihat detail satu resource', async function(){
        await anaResource.typeSearch('testerx')
        await anaResource.viewDetail()
        await browser.pause(3000)
        await expect(anaResource.xResourceDetail).toHaveText('Resource Details')
    })
})