import { expect } from '@wdio/globals'
import dashboardPage from '../pageobjects/dashboard.page.js'
import sidebarMenuPage from '../pageobjects/sidebarMenu.page.js'

describe('Dashboard Page', () => {
  before(async () => {
    await dashboardPage.openPage()
  })

  it('1. Menampilkan halaman dashboard setelah login', async () => {
    //ACTION
    await dashboardPage.login('dummy@prosigmaka.com', 'dummypsm')
    await browser.pause(3000) //Wait for browser to process loading
    await dashboardPage.openTimesheet()

    //DEBUG
    const dashboardTitleText = await dashboardPage.title.getText()
    console.log(dashboardTitleText)

    //ASSERT
    await expect(dashboardPage.title).toHaveText('Dashboard')
  })

  it('2. Menampilkan halaman dashboard ketika dinavigasikan dari halaman placement', async () => {
    //ACTION
    await sidebarMenuPage.openPlacementsPage()
    await sidebarMenuPage.openDashboardPage()

    //ASSERT
    await expect(dashboardPage.title).toHaveText('Dashboard')
  })

  it('3. Menampilkan halaman dashboard ketika dinavigasikan dari halaman resources', async () => {
    //ACTION
    await sidebarMenuPage.openResourcesPage()
    await sidebarMenuPage.openDashboardPage()

    //ASSERT
    await expect(dashboardPage.title).toHaveText('Dashboard')
  })

  it('4. Menampilkan halaman dashboard ketika dinavigasikan dari halaman clients', async () => {
    //ACTION
    await sidebarMenuPage.openClientsPage()
    await sidebarMenuPage.openDashboardPage()

    //ASSERT
    await expect(dashboardPage.title).toHaveText('Dashboard')
  })

  it('5. Menampilkan halaman dashboard ketika dinavigasikan dari halaman positon', async () => {
    //ACTION
    await sidebarMenuPage.openPositionPage()
    await sidebarMenuPage.openDashboardPage()

    //ASSERT
    await expect(dashboardPage.title).toHaveText('Dashboard')
  })

  it('6. Menampilkan halaman dashboard ketika dinavigasikan dari halaman holidays', async () => {
    //ACTION
    await sidebarMenuPage.openHolidaysPage()
    await sidebarMenuPage.openDashboardPage()

    //ASSERT
    await expect(dashboardPage.title).toHaveText('Dashboard')
  })

  it('7. Menampilkan halaman dashboard ketika dinavigasikan dari halaman reset password', async () => {
    //ACTION
    await sidebarMenuPage.openResetPasswordPage()
    await sidebarMenuPage.openDashboardPage()

    //ASSERT
    await expect(dashboardPage.title).toHaveText('Dashboard')
  })
})
