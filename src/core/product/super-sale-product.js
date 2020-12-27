"use strict";

const NormalProduct = require("./normal-product");
const constants = require("../../utils/constants");
const PRICE_DEGRADER = 2;

/**
 *   SuperSaleProduct
 *
 * - Before the sell by date has passed, price degrades by 2
 * - Once the sell by date has passed, price degrades twice as fast
 * - The price of a product is never more than 50.
 */
module.exports = class SuperSaleProduct extends NormalProduct {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice() {
    if (this.price > constants.MIN_PRODUCT_PRICE) {
      this.price = this.price - PRICE_DEGRADER;
    }
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < constants.MIN_PRODUCT_SELLIN) {
      if (this.price > constants.MIN_PRODUCT_PRICE) {
        this.price = this.price - PRICE_DEGRADER;
      }
    }
  }
};
