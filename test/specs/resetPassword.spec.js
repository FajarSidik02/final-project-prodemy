import { expect } from '@wdio/globals'
import resetPasswordPage from '../pageobjects/resetPassword.page.js'
import sidebarMenuPage from '../pageobjects/sidebarMenu.page.js'

describe('Reset Password Page', () => {
  before(async () => {
    await resetPasswordPage.openPage()
    await resetPasswordPage.login('dummy@prosigmaka.com', 'dummypsm')
    await browser.pause(3000) //Wait for browser to process loading
    await resetPasswordPage.openTimesheet()
  })

  it('1. Menampilkan halaman reset password ketika dinavigasikan dari halaman dashboard', async () => {
    //ACTION
    await sidebarMenuPage.openDashboardPage()
    await sidebarMenuPage.openResetPasswordPage()

    //ASSERT
    await expect(resetPasswordPage.title).toHaveText('Reset Password')
  })

  it('2. Menampilkan halaman reset password ketika dinavigasikan dari halaman placement', async () => {
    //ACTION
    await sidebarMenuPage.openPlacementsPage()
    await sidebarMenuPage.openResetPasswordPage()

    //ASSERT
    await expect(resetPasswordPage.title).toHaveText('Reset Password')
  })

  it('3. Menampilkan halaman reset password ketika dinavigasikan dari halaman resources', async () => {
    //ACTION
    await sidebarMenuPage.openResourcesPage()
    await sidebarMenuPage.openResetPasswordPage()

    //ASSERT
    await expect(resetPasswordPage.title).toHaveText('Reset Password')
  })

  it('4. Menampilkan halaman reset password ketika dinavigasikan dari halaman clients', async () => {
    //ACTION
    await sidebarMenuPage.openClientsPage()
    await sidebarMenuPage.openResetPasswordPage()

    //ASSERT
    await expect(resetPasswordPage.title).toHaveText('Reset Password')
  })

  it('5. Menampilkan halaman reset password ketika dinavigasikan dari halaman positon', async () => {
    //ACTION
    await sidebarMenuPage.openPositionPage()
    await sidebarMenuPage.openResetPasswordPage()

    //ASSERT
    await expect(resetPasswordPage.title).toHaveText('Reset Password')
  })

  it('6. Menampilkan halaman reset password ketika dinavigasikan dari halaman holidays', async () => {
    //ACTION
    await sidebarMenuPage.openHolidaysPage()
    await sidebarMenuPage.openResetPasswordPage()

    //ASSERT
    await expect(resetPasswordPage.title).toHaveText('Reset Password')
  })
})
