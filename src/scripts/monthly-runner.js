"use strict";

const CarInsurance = require("../core/insurance/car-insurance");
const NormalProduct = require("../core/product/normal-product");
const FullCoverageProduct = require("../core/product/full-coverage-product");
const SpecialFullCoverageProduct = require("../core/product/special-full-coverage-product");
const MegaCoverageProduct = require("../core/product/mega-coverage-product");
const SuperSaleProduct = require("../core/product/super-sale-product");
const args = process.argv.slice(2);

const productsAtDayZero = [
  new NormalProduct("Medium Coverage", 10, 20),
  new FullCoverageProduct("Full Coverage", 2, 0),
  new NormalProduct("Low Coverage", 5, 7),
  new MegaCoverageProduct("Mega Coverage", 0),
  new MegaCoverageProduct("Mega Coverage", -1),
  new SpecialFullCoverageProduct("Special Full Coverage", 15, 20),
  new SpecialFullCoverageProduct("Special Full Coverage", 10, 49),
  new SpecialFullCoverageProduct("Special Full Coverage", 5, 49),
  new SuperSaleProduct("Super Sale", 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = function (product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

const consoleLog = function (products, day) {
  console.log(`-------- day ${day} --------`);
  console.log("name, sellIn, price");
  products.forEach(productPrinter);
  console.log("");
};

console.log("OMGHAI!");
consoleLog(carInsurance.products, 0);
for (let i = 1; i <= 30; i += 1) {
  if (args.indexOf("async") > -1) {
    carInsurance.updatePriceAsync().then(function (promiseRespones) {
      consoleLog(promiseRespones, i);
    });
  } else {
    consoleLog(carInsurance.updatePrice(), i);
  }
}
