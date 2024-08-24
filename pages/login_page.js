const { I } = inject()

class LoginPage {
  constructor() {
    this.usernameField = '#user-name'
    this.passwordField = '#password'
    this.loginButton = '#login-button'
  }

  visit() {
    I.amOnPage('/')
  }

  fillUsername(username) {
    I.fillField(this.usernameField, username)
  }

  fillPassword(password) {
    I.fillField(this.passwordField, password)
  }

  submit() {
    I.click(this.loginButton)
  }
}

module.exports = new LoginPage()
