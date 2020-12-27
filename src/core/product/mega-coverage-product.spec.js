const expect = require("chai").expect;

const MegaCoverageProduct = require("./mega-coverage-product");

describe("MegaCoverageProduct Test", function () {
  let product;
  beforeEach(function () {
    product = new MegaCoverageProduct("Some product", 10);
    product.updatePrice();
  });

  it("should create a product with sellIn = 10", function () {
    expect(product.sellIn).equal(10);
  });

  it("should create a product with price = 80", function () {
    expect(product.price).equal(80);
  });
});
