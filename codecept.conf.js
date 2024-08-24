const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure')
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

setCommonPlugins()

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: false,
    },
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login_page.js',
    inventoryPage: './pages/inventory_page.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept_playwright',
}
