import { $ } from '@wdio/globals'

class SidebarMenu {
  get dashboardButton() {
    return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[1]/a')
  }
  get placementsButton() {
    return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[2]/a')
  }
  get resourcesButton() {
    return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[3]/a')
  }
  get clientsButton() {
    return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[4]/a')
  }
  get positionButton() {
    return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[5]/a')
  }
  get holidaysButton() {
    return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[6]/a')
  }
  get resetPasswordButton() {
    return $('//*[@id="header-root"]/div/div/div[1]/div[2]/div[7]/a')
  }

  async openDashboardPage() {
    await this.dashboardButton.click()
  }
  async openPlacementsPage() {
    await this.placementsButton.click()
  }
  async openResourcesPage() {
    await this.resourcesButton.click()
  }
  async openClientsPage() {
    await this.clientsButton.click()
  }
  async openPositionPage() {
    await this.positionButton.click()
  }
  async openHolidaysPage() {
    await this.holidaysButton.click()
  }
  async openResetPasswordPage() {
    await this.resetPasswordButton.click()
  }
}

export default new SidebarMenu()
