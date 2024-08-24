Feature('Inventory')

Before(({ loginPage }) => {
  loginPage.visit()
  loginPage.fillUsername('standard_user')
  loginPage.fillPassword('secret_sauce')
  loginPage.submit()
})

Scenario(
  'Sort inventory by price low to high',
  async ({ I, loginPage, inventoryPage }) => {
    inventoryPage.isLoaded()
    inventoryPage.sortItemsBy('Price (low to high)')
    I.see('Sauce Labs Onesie', await inventoryPage.getFirstItem())
  }
)

Scenario(
  'Add item to card and verify cart badge',
  ({ I, loginPage, inventoryPage }) => {
    inventoryPage.isLoaded()
    inventoryPage.addItemToCart('Sauce Labs Backpack')
    inventoryPage.seeCartBadgeElement()
    I.see('1', inventoryPage.cartBadge)
  }
)
