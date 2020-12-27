"use strict";

/**
 * CarInsurance
 *
 * contains a list of products and business logic to update its prices
 */
module.exports = class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  /** Update the price of all products */
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      this.products[i].updatePrice();
    }
    return this.products;
  }

  /** Update the price of all products async alternative
   * in case of large number of products
   */
  async updatePriceAsync() {
    const promisesArray = [];
    for (var i = 0; i < this.products.length; i++) {
      promisesArray.push(this.products[i].updatePriceAsync());
    }
    return Promise.all(promisesArray);
  }
};
