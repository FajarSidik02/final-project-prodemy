import { $,expect, browser } from '@wdio/globals'
import clientPage from '../pageobjects/client.page.js'


describe ("CLIENT TIMESHEET", function(){
    before('User harus berada di halaman Client List ',async function() {
        await clientPage.openPageClient()
        await clientPage.client('dummy@prosigmaka.com', 'dummypsm')
        await browser.pause(5000)
        await clientPage.launch()
        await browser.pause(3000)
        await clientPage.OpenClientList()
    })

    it('1. Klik tombol + New Client tetapi cancel', async function (){ 
        await clientPage.newClient()
        await clientPage.cancelNewClient()
        await expect(clientPage.clientList).toBeDisplayed()
    })

    it('2. Klik tombol + New Client', async function (){ 
        await clientPage.newClient()
        await browser.pause(2000)
        await clientPage.inputNewClient('Alya')
        await clientPage.submitClient()
        await expect(clientPage.created).toHaveText('Alya')
    })

    it('3. Klik tombol + New Client dengan isi nama yang sudah ada dalam list', async function (){ 
        await clientPage.newClient()
        await clientPage.inputNewClient('Alya')
        await browser.pause(3000)
        await clientPage.submitClient()
        await browser.pause(2000)
        await clientPage.cancelNewClient()
        //bingung expectnya apa

        // await expect(clientPage.popUpRegistered).toHaveText('clien has been registered')
        // await browser.pause(2000)
    })

    it('4. Klik tombol Update Selected Client pada nama Bambang', async function (){ 
        await clientPage.kolomBambang()
        await clientPage.klikUpdate()
        await clientPage.updateBambang(' IT')
        await clientPage.submitUpdate()
        await browser.pause(2000)
        //bingung expectnya apa
        await expect(clientPage.kolomBambang).toHaveText('Bambang IT')
    })

    it.only('5. Klik tombol Update Selected Client pada nama Astra Internasional tp yg diapus setengah', async function (){ 
        //await clientPage.klikAstra()
        await clientPage.klikUpdate()
        await clientPage.clearAstra() //belum ke clear
        await clientPage.setAstra()
        await clientPage.submitUpdate()
        await expect(clientPage.klikAstra).toHaveText('Astra')
        //setvalue astra
        // atau di clear dl baru di set
        //kl mau diapus aja --> browser.keys 
    })

    it('6. Klik tombol Navigasi pada halaman client list untuk berpindah ke halaman selanjutnya dan mengembaikannya', async function (){ 
        await clientPage.navigasiNext()
        await expect(clientPage.halamanNext).toHaveText('Page 2 of 2')

    })

    it('6. Mengembalikan halaman ke halaman awal', async function (){ 
        await clientPage.navigasiBack()
        await expect(clientPage.halamanAwal).toHaveText('Page 1 of 2')
        await browser.pause(3000)

    })

    it('7. Klik tombol Update Selected Client tetapi cancel', async function (){ 
        await clientPage.kolomBambang()
        await clientPage.klikUpdate()
        await clientPage.klikCancelUpdate()
        await expect(clientPage.clientList).toBeDisplayed()
    })

    it('9. Klik tombol Delete Selected Client pada salah satu nama client tetapi cancel ', async function (){ 
        
    })

    it('8. Klik tombol Delete Selected Client dengan salah satu nama client', async function (){ 
        
    })

    it('10. Search nama client dengan memasukkan 1 huruf', async function (){ 
        
    })

    it('11. Search dengan full nama salah satu client ', async function (){ 
        
    })

    it('12. Klik button silang pada kolom search', async function (){ 
        
    })

    it('13. Klik tombol View Selected Client pada client ecomindo', async function (){ 
        
    })

    it('14. Klik tombol Back pada halaman client detail', async function (){ 
        
    })

    it('15. Klik tombol View Selected pada placement history di halaman client detail', async function (){ 
        
    })

    it('16. Klik tombol Back pada halaman placement detail', async function (){ 
        
    })

    it('17. Short nama berdasarkan descending', async function (){ 
        
    })

    it('18. Mengembalikan short nama berdasarkan ascending', async function (){ 
        
    })

    it('19. Mengembalikan short nama berdasarkan default', async function (){ 
        
    })
})