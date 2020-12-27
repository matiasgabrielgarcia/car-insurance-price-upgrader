const expect = require("chai").expect;

const SuperSaleProduct = require("./super-sale-product");

describe("SuperSaleProduct Test", function () {
  let superSaleProduct;
  beforeEach(function () {
    superSaleProduct = new SuperSaleProduct("Some product", 10, 30);
  });

  it("should throw error when a product with price higher than 50", function () {
    expect(function () {
      new SuperSaleProduct("imposible product", 10, 51);
    }).to.throw(Error);
  });

  it("should decrease price by 2 when updatePrice is called", function () {
    superSaleProduct.updatePrice();
    expect(superSaleProduct.price).equal(28);
  });

  it("should decrease price to 0 when price is updated more than 12 days", function () {
    for (let i = 0; i <= 12; i += 1) {
      superSaleProduct.updatePrice();
    }
    expect(superSaleProduct.price).equal(0);
  });

  it("should decrease price to 0 when price is updated more than 20 days", function () {
    for (let i = 0; i <= 20; i += 1) {
      superSaleProduct.updatePrice();
    }
    expect(superSaleProduct.price).equal(0);
  });
});
