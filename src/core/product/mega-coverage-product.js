"use strict";

const Product = require("./product");

/**
 * MegaCoverageProduct
 *
 * - legendary product and as such its price is 80 and it never alters,
 * never has to be sold or decreases in price
 */
module.exports = class MegaCoverageProduct extends Product {
  constructor(name, sellIn) {
    super(name, sellIn, 80);
  }
  updatePrice() {
    // nothing to do here
  }
};
