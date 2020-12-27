const expect = require("chai").expect;

const FullCoverageProduct = require("./full-coverage-product");

describe("FullCoverageProduct Test", function () {
  let product;
  beforeEach(function () {
    product = new FullCoverageProduct("Product", 11, 20);
  });

  it("should throw error when a product with price higher than 50", function () {
    expect(function () {
      new FullCoverageProduct("imposible product", 10, 51);
    }).to.throw(Error);
  });

  it("should increase price by 1 when less than 10 days left", function () {
    product.updatePrice();
    expect(product.price).equal(21);
  });

  it("should increase price by 1 after no more days left", function () {
    for (let i = 0; i <= 13; i += 1) {
      product.updatePrice();
    }
    expect(product.price).equal(37);
  });

  it("should not continue increasing when price is 50", function () {
    for (let i = 0; i <= 40; i += 1) {
      product.updatePrice();
    }
    expect(product.price).equal(50);
  });
});
