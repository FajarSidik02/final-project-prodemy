import { expect } from '@wdio/globals'
import holidaysPage from '../pageobjects/holidays.page.js'
import sidebarMenuPage from '../pageobjects/sidebarMenu.page.js'

describe('Holidays Page', () => {
  before(async () => {
    await holidaysPage.openPage()
    await holidaysPage.login('dummy@prosigmaka.com', 'dummypsm')
    await browser.pause(3000) //Wait for browser to process loading
    await holidaysPage.openTimesheet()
  })

  it('1. Menampilkan halaman holidays ketika dinavigasikan dari halaman dashboard', async () => {
    //ACTION
    await sidebarMenuPage.openDashboardPage()
    await sidebarMenuPage.openHolidaysPage()

    //ASSERT
    await expect(holidaysPage.title).toHaveText('Holiday List')
  })

  it('2. Menampilkan halaman holidays ketika dinavigasikan dari halaman placement', async () => {
    //ACTION
    await sidebarMenuPage.openPlacementsPage()
    await sidebarMenuPage.openHolidaysPage()

    //ASSERT
    await expect(holidaysPage.title).toHaveText('Holiday List')
  })

  it('3. Menampilkan halaman holidays ketika dinavigasikan dari halaman resources', async () => {
    //ACTION
    await sidebarMenuPage.openResourcesPage()
    await sidebarMenuPage.openHolidaysPage()

    //ASSERT
    await expect(holidaysPage.title).toHaveText('Holiday List')
  })

  it('4. Menampilkan halaman holidays ketika dinavigasikan dari halaman clients', async () => {
    //ACTION
    await sidebarMenuPage.openClientsPage()
    await sidebarMenuPage.openHolidaysPage()

    //ASSERT
    await expect(holidaysPage.title).toHaveText('Holiday List')
  })

  it('5. Menampilkan halaman holidays ketika dinavigasikan dari halaman positon', async () => {
    //ACTION
    await sidebarMenuPage.openPositionPage()
    await sidebarMenuPage.openHolidaysPage()

    //ASSERT
    await expect(holidaysPage.title).toHaveText('Holiday List')
  })

  it('6. Menampilkan halaman holidays ketika dinavigasikan dari halaman reset password', async () => {
    //ACTION
    await sidebarMenuPage.openResetPasswordPage()
    await sidebarMenuPage.openHolidaysPage()

    //ASSERT
    await expect(holidaysPage.title).toHaveText('Holiday List')
  })
})
