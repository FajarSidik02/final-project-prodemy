// minimal harus udah selesai bagian create dan updatenya
import { $,expect, browser } from '@wdio/globals'
import positionPage from '../pageobjects/position.page.js'
import { isAscending, isDescending } from '../helpAlya.js'


describe ("POSITION TIMESHEET", function(){
    before('User harus berada di halaman Position List ',async function() {
        await positionPage.openPagePosition()
        await positionPage.position('dummy@prosigmaka.com', 'dummypsm')
        await browser.pause(5000)
        await positionPage.launch()
        await browser.pause(3000)
        await positionPage.klikOpenPositionList()
    })

    it('1. Klik tombol + New Position tetapi cancel', async function (){ 
        await positionPage.klikNewPosition()
        await positionPage.klikCancelNewPosition()
        await expect(positionPage.positionList).toBeDisplayed()
    })

    it('2. Klik tombol + New Position dengan isi nama depan huruf besar', async function (){ 
        await positionPage.klikNewPosition()
        await positionPage.inputNewPosition('Data Scientist')
        await positionPage.klikBtnSubmitPosition()
        await expect(positionPage.kolomDataScientist).toHaveText('Data Scientist')
    })

    it('3. Klik tombol + New Position dengan nama yang sudah ada dalam list', async function (){ 
        await positionPage.klikNewPosition()
        await positionPage.inputNewPosition('Data Scientist')
        await positionPage.klikBtnSubmitPosition()
        await positionPage.klikCancelNewPosition()
        //expectnya kl popup kecepetan
    })

    it('4. Klik tombol Update Selected Position tetapi cancel', async function (){ 
        await positionPage.klikKolomAndroid()
        await positionPage.klikBtnUpdate()
        await positionPage.klikBtnCancel()
        await expect(positionPage.positionList).toBeDisplayed()
    })

    it('5. Klik tombol Update Selected Position pada nama Android Developer', async function (){ 
        await positionPage.klikKolomAndroid()
        await positionPage.klikBtnUpdate()
        await positionPage.updatePosition(' Junior') //ke set junior tp pas di submit juniornya keapus
        await positionPage.klikBtnSubmit()
        await expect(positionPage.kolomAndroid).toHaveText('Android Developer Junior')
    })

    it('6. Klik tombol Update Selected Position pada nama Android Developer Junior, tetapi yang dihapus hanya Juniornya saja', async function (){ 
        await positionPage.klikKolomAndroid()
        await positionPage.klikBtnUpdate()
        await positionPage.clearAndroid()
        await positionPage.setAndroid()
        //masi error kaya client

    })

    it('7. Klik tombol Delete Selected Position pada salah satu nama position dengan placement 0 tetapi cancel ', async function (){ 
        await positionPage.klikKolomSystem()
        await positionPage.klikBtnDelete()
        await positionPage.klikBtnCancelDelete()
        await expect(positionPage.positionList).toBeDisplayed()

    })

    it('8. Klik tombol Delete Selected Position dengan salah satu nama position dengan placement 0', async function (){ 
        await positionPage.klikKolomSystem()
        await positionPage.klikBtnDelete()
        await positionPage.klikBtnYesDelete()
        await expect(positionPage.positionList).toBeDisplayed()
    })

    it('9. Klik tombol Navigasi pada halaman client list untuk berpindah ke halaman selanjutnya', async function (){ 
        await positionPage.klikBtnNext()
        await expect(positionPage.halamanNext).toHaveText('Page 2 of 2') //expectnya masi salah kaya dibawah
        // - Expected  - 1
        // + Received  + 3

        // - Page 2 of 2
        // + Page 
        // + 2
        // +  of 2
    })

    it('10. Mengembalikan halaman ke halaman awal', async function (){ 
        await positionPage.klikBtnBack()
        await expect(positionPage.halamanAwal).toHaveText('Page 1 of 2') //ini jg sama
    })

    it('11. Search nama position dengan memasukkan 1 huruf', async function (){ 
        await positionPage.inputSearch('r')
        await browser.pause(2000)
        let search = await positionPage.getAllName()
        let jumlahNama = search.length
        console.log('--------->', search)

        search.forEach(element => { 
            expect(element).toMatch(/[rR]/) //yg mengandung r kecil atau r besar
        })
        await expect(positionPage.allNamePosition).toBeElementsArrayOfSize(jumlahNama)
    })

    it('12. Search dengan full nama salah satu position', async function (){ 
        await positionPage.inputSearch('Quality Assurance')
        await browser.pause(2000)
        let search = await positionPage.getAllName()
        let jumlahNama = search.length
        console.log('--------->', search)

        search.forEach(element => { 
            expect(element).toMatch(/Quality Assurance/i) 
        })
        await expect(positionPage.allNamePosition).toBeElementsArrayOfSize(jumlahNama) // sama kaya 11
    })

    it('13. Klik button silang pada kolom search', async function (){ 
        await positionPage.inputSearch('a')
        await browser.pause(2000)
        await positionPage.klikSilangPosition()
        await expect(positionPage.positionList).toBeDisplayed()
    })

    it('14. Klik tombol View Selected Position pada DB Admin', async function (){ 
        await positionPage.positionDetail()
        await expect(positionPage.positionList).toBeDisplayed()

    })

    it('15. Short nama Position berdasarkan descending', async function (){ 
        await positionPage.shortDesc()
        await browser.pause(2000)
        let search = await positionPage.getAllName() //allNamePosisi is not iterable di page jsnya
        //let jumlahNama = search.length
        console.log('--------->', search)

        await expect(isDescending(search)).toBe(true)
    })

    it('16. Short nama Position berdasarkan ascending', async function (){ 
        await positionPage.shortAsc()
        await browser.pause(2000)
        let search = await positionPage.getAllName()
        //let jumlahNama = search.length
        console.log('--------->', search)

        await expect(isAscending(search)).toBe(true) //sama kaya 15

        //await expect(clientPage.allNameClient).toBeElementsArrayOfSize(jumlahNama)
        
    })

    it.only('17. Hapus nama position dengan total placement 1', async function (){ 
        await positionPage.klikKolomAndroid()
        await browser.pause(2000)
        await expect(positionPage.btnDelete).not.toBeEnabled()
        await browser.pause(2000)
    })

})