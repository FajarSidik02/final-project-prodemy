import { $ } from '@wdio/globals'

class Dashboard {
  get usernameInput() {
    return $('input[name="username"]')
  }
  get passwordInput() {
    return $('input[name="password"]')
  }
  get buttonLogin() {
    return $('//*[@id="root"]/div[2]/div/div/div/div[2]/form/div[3]/button')
  }
  get buttonAdmin() {
    return $(
      '#root > section > div > div.sc-gfhzuL.cMfFWL > div > div.sc-GQHCi.lmmNTr.t--workspace-section > div.sc-kmtlux.bXecFQ > div.sc-jigNDC.gpcQed > div:nth-child(1) > div > div',
    )
  }
  get title() {
    return $('//*[@id="auto_6lrt5iil2c"]')
  }

  async openPage() {
    await browser.url('https://timesheet.app.prosigmaka.com/user/login')
  }
  async login(username, password) {
    await this.usernameInput.setValue(username)
    await this.passwordInput.setValue(password)
    await this.buttonLogin.click()
  }
  async openTimesheet() {
    await this.buttonAdmin.click()
  }
}

export default new Dashboard()
