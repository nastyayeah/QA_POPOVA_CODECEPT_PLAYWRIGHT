Feature('Login')

Scenario(
  'Login with valid credentials',
  async ({ I, loginPage, inventoryPage }) => {
    loginPage.visit()
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('secret_sauce')
    loginPage.submit()
    I.seeCurrentUrlEquals(inventoryPage.inventoryURL)
    I.see('Sauce Labs Backpack')
  }
)

Scenario('Login with invalid credentials', ({ I, loginPage }) => {
  loginPage.visit()
  loginPage.fillUsername('invalid_user')
  loginPage.fillPassword('invalid_password')
  loginPage.submit()
  I.seeCurrentUrlEquals('https://www.saucedemo.com/')
  I.see(
    'Epic sadface: Username and password do not match any user in this service',
    '.error-message-container'
  )
})

Scenario(
  'Attempt to access inventory page without login',
  async ({ I, loginPage, inventoryPage }) => {
    loginPage.visit()
    I.amOnPage(inventoryPage.inventoryURL)
    I.seeElement(loginPage.usernameField)
  }
)
