"use strict";

const Product = require("./product");
const constants = require("../../utils/constants");

/**
 * NormalProduct
 *
 * - Before the sell by date has passed, price degrades by 1
 * - Once the sell by date has passed, price degrades twice as fast
 * - The price of a product is never more than 50.
 */
module.exports = class NormalProduct extends Product {
  constructor(name, sellIn, price) {
    if (price > constants.MAX_PRODUCT_PRICE) {
      throw new Error(
        `The price of a product cant be above ${constants.MAX_PRODUCT_PRICE}`
      );
    }
    super(name, sellIn, price);
  }
  updatePrice() {
    if (this.price > constants.MIN_PRODUCT_PRICE) {
      this.price = this.price - constants.PRICE_DEGRADER;
    }
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < constants.MIN_PRODUCT_SELLIN) {
      if (this.price > constants.MIN_PRODUCT_PRICE) {
        this.price = this.price - constants.PRICE_DEGRADER;
      }
    }
  }
};
