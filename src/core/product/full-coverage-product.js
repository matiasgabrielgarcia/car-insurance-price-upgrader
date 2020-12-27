"use strict";

const NormalProduct = require("./normal-product");
const constants = require("../../utils/constants");

/**
 * FullCoverageProduct
 *
 * - Before the sell by date has passed, increases in price by 1 the older it gets.
 * - Once the sell by date has passed, price degrades twice as fast.
 */
module.exports = class FullCoverageProduct extends NormalProduct {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }
  updatePrice() {
    if (this.price < constants.MAX_PRODUCT_PRICE) {
      this.price = this.price + constants.PRICE_DEGRADER;
    }
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < constants.MIN_PRODUCT_SELLIN) {
      if (this.price < constants.MAX_PRODUCT_PRICE) {
        this.price = this.price + constants.PRICE_DEGRADER;
      }
    }
  }
};
