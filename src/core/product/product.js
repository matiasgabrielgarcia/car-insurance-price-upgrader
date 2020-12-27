"use strict";

/**
 * Product
 *
 * Represents business unit with
 * - name: name of the product
 * - sellIn: number of days we have to sell the product
 * - price: how much the product cost
 */
module.exports = class Product {
  constructor(name, sellIn, price) {
    /** name: name of the product */
    this.name = name;
    /** sellIn: number of days we have to sell the product */
    this.sellIn = sellIn;
    /** price: how much the product cost */
    this.price = price;
  }

  updatePrice() {
    throw new Error("You must implement this method in subclass");
  }
};
