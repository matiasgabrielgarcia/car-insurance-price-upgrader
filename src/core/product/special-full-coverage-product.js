("use strict");

const NormalProduct = require("./normal-product");
const constants = require("../../utils/constants");
const DAYS_TO_INCREASE_BY_2 = 11;
const DAYS_TO_INCREASE_BY_3 = 6;

/**
 * SpecialFullCoverageProduct
 *
 * - Before the sell by date has passed, increases in price depending the amount of days:
 * - 10 days or less: increase by 2
 * - 5 days or less: increase by 3
 * - No more days left: price drops to 0 (and the product is not valid anymore)
 */
module.exports = class SpecialFullCoverageProduct extends NormalProduct {
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }
  updatePrice() {
    if (this.sellIn < constants.MIN_PRODUCT_SELLIN) {
      this.price = this.price - this.price;
    } else if (this.price < constants.MAX_PRODUCT_PRICE) {
      this.price = this.price + constants.PRICE_DEGRADER;
      if (this.sellIn < DAYS_TO_INCREASE_BY_2) {
        this.price = this.price + constants.PRICE_DEGRADER;
      }
      if (this.sellIn < DAYS_TO_INCREASE_BY_3) {
        this.price = this.price + constants.PRICE_DEGRADER;
      }
    }
    this.sellIn = this.sellIn - 1;
  }
};
