// minimal harus udah selesai bagian create dan updatenya
import { $,expect, browser } from '@wdio/globals'
import positionPage from '../pageobjects/position.page.js'

describe ("POSITION TIMESHEET", function(){
    before('User harus berada di halaman Position List ',async function() {
        await clientPage.openPageClient()
        await clientPage.client('dummy@prosigmaka.com', 'dummypsm')
        await browser.pause(5000)
        await clientPage.launch()
        await browser.pause(3000)
        await clientPage.OpenClientList()
    })

})