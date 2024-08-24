const { I } = inject()

class InventoryPage {
  constructor() {
    this.inventoryContainer = '.inventory_list'
    this.inventoryURL = 'https://www.saucedemo.com/inventory.html'
    this.sortDropdown = '.product_sort_container'
    this.firstItem = '.inventory_item:first-child .inventory_item_name'
    this.addToCartItemButton = (itemName) =>
      `#add-to-cart-${itemName.toLowerCase().split(' ').join('-')}`
    this.cartBadge = '.shopping_cart_badge'
  }

  isLoaded() {
    I.seeElement(this.inventoryContainer)
  }

  addItemToCart(itemName) {
    I.click(this.addToCartItemButton(itemName))
  }

  getFirstItem() {
    return this.firstItem
  }

  async getFirstItemName() {
    return await I.grabTextFrom(this.firstItem)
  }

  sortItemsBy(option) {
    I.selectOption(this.sortDropdown, option)
  }

  seeCartBadgeElement() {
    I.seeElement(this.cartBadge)
  }
}

module.exports = new InventoryPage()
