const expect = require("chai").expect;

const SpecialFullCoverageProduct = require("./special-full-coverage-product");

describe("SpecialFullCoverageProduct Test", function () {
  let product;
  beforeEach(function () {
    product = new SpecialFullCoverageProduct("Product", 28, 10);
  });

  it("should throw error when a product with price higher than 50", function () {
    expect(function () {
      new SpecialFullCoverageProduct("imposible product", 10, 51);
    }).to.throw(Error);
  });

  it("should increase price by 1 when more than 10 days left", function () {
    product = new SpecialFullCoverageProduct("Product", 11, 30);
    product.updatePrice();
    expect(product.price).equal(31);
  });

  it("should increase price by 2 when less than 10 days left but more than 6", function () {
    for (let i = 0; i <= 20; i += 1) {
      product.updatePrice();
    }
    expect(product.price).equal(34);
  });

  it("should increase price by 3 when less than 6 days left", function () {
    for (let i = 0; i <= 24; i += 1) {
      product.updatePrice();
    }
    expect(product.price).equal(44);
  });

  it("should drop price to 0 when no more days left", function () {
    for (let i = 0; i <= 29; i += 1) {
      product.updatePrice();
    }
    expect(product.price).equal(0);
  });
});
