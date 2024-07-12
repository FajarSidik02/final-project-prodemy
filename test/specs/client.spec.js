import { $,expect, browser } from '@wdio/globals'
import clientPage from '../pageobjects/client.page.js'
import { isAscending, isDescending } from '../helpAlya.js'


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
        // await browser.execute(function () {
        //     document.querySelector('input[value="Astra Internasional"]').setAttribute('value', 'Astra');
        //     })
        //await clientPage.setAstra()
        await clientPage.clearAstra() //belum ke clear
        await browser.pause(2000)
        await clientPage.setAstra()
        //await clientPage.submitUpdate()
        //await expect(clientPage.kolomAstra).toHaveText('Abc')
        
    })

    it('6. Klik tombol Navigasi pada halaman client list untuk berpindah ke halaman selanjutnya', async function (){ 
        await clientPage.navigasiNext()
        await expect(clientPage.halamanNext).toHaveText('Page 2 of 2') //expectnya beluman passed

    })

    it('7. Mengembalikan halaman ke halaman awal', async function (){ 
        await clientPage.navigasiBack()
        await expect(clientPage.halamanAwal).toHaveText('Page 1 of 2') //ini juga
        await browser.pause(3000)

    })

    it('8. Klik tombol Update Selected Client tetapi cancel', async function (){ 
        await clientPage.kolomBambang()
        await clientPage.klikUpdate()
        await clientPage.klikCancelUpdate()
        await expect(clientPage.clientList).toBeDisplayed()
    })

    it('9. Klik tombol Delete Selected Client pada salah satu nama client tetapi cancel ', async function (){ 
        await clientPage.klikEcomindo()
        await clientPage.klikDelete()
        await clientPage.klikCancelDelete()
        await expect(clientPage.clientList).toBeDisplayed()
    })

    it('10. Klik tombol Delete Selected Client dengan salah satu nama client', async function (){ 
        await clientPage.klikEcomindo()
        await clientPage.klikDelete()
        await clientPage.klikYesDelete()
        //expectnya gimana kl dia ke delete? kl popup kecepetan
    })

    it('11. Search nama client dengan memasukkan 1 huruf', async function (){ 
        await browser.pause(3000)
        await clientPage.inputSearch('a')
        await browser.pause(3000)
        let searchA = await clientPage.getAllName()
        let jumlahNama = searchA.length
        console.log('--------->', searchA)

        searchA.forEach(element => { 
            expect(element).toMatch(/[aA]/) //yg mengandung a kecil atau a besar
        })

        await expect(clientPage.allNameClient).toBeElementsArrayOfSize(jumlahNama)

    })

    it('12. Search dengan full nama salah satu client ', async function (){ 
        await browser.pause(3000)
        await clientPage.inputSearch('Bambang')
        await browser.pause(3000)
        let searchA = await clientPage.getAllName()
        let jumlahNama = searchA.length
        console.log('--------->', searchA)

        searchA.forEach(element => { 
            expect(element).toMatch(/Bambang/i) //i = kl kata pake i, kl huruf pake []
        })

        await expect(clientPage.allNameClient).toBeElementsArrayOfSize(jumlahNama)
    })

    it('13. Klik button silang pada kolom search', async function (){ 
        await browser.pause(3000)
        await clientPage.inputSearch('b')
        await browser.pause(3000)
        await clientPage.klikSilangSearch()
        await expect(clientPage.clientList).toBeDisplayed()
    })

    it('14. Klik tombol View Selected Client pada client ecomindo', async function (){ 
        await clientPage.klikEcomindo()
        await clientPage.klikBtnView()
        await browser.pause(2000)
        await clientPage.klikBtnViewSelected()
        await browser.pause(2000)
        await clientPage.klikBtnBackPlacement()
        await browser.pause(2000)
        await clientPage.klikBtnBackClient()
        await browser.pause(2000)
        await expect(clientPage.clientList).toBeDisplayed()
    })

    it('15. Short nama berdasarkan descending', async function (){
        await clientPage.klikKolomNameDesc()
        await browser.pause(2000)
        let searchA = await clientPage.getAllName()
        //let jumlahNama = searchA.length
        console.log('--------->', searchA)

        await expect(isDescending(searchA)).toBe(true)

        //await expect(clientPage.allNameClient).toBeElementsArrayOfSize(jumlahNama)
    })

    it('16. Short nama berdasarkan ascending', async function (){ 
        await clientPage.klikKolomNameAsc()
        await browser.pause(2000)
        let searchA = await clientPage.getAllName()
        //let jumlahNama = searchA.length
        console.log('--------->', searchA)

        await expect(isAscending(searchA)).toBe(true)

        //await expect(clientPage.allNameClient).toBeElementsArrayOfSize(jumlahNama)
    })
})