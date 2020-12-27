const expect = require("chai").expect;

const NormalProduct = require("./normal-product");

describe("NormalProduct Test", function () {
  let normalProduct;
  beforeEach(function () {
    normalProduct = new NormalProduct("Some product", 10, 20);
  });

  it("should throw error when a product with price higher than 50", function () {
    expect(function () {
      new NormalProduct("imposible product", 10, 51);
    }).to.throw(Error);
  });

  it("should decrease price by 1 when updatePrice is called", function () {
    normalProduct.updatePrice();
    expect(normalProduct.price).equal(19);
  });

  it("should decrease price to 0 when price is updated more than 20 days", function () {
    for (let i = 0; i <= 20; i += 1) {
      normalProduct.updatePrice();
    }
    expect(normalProduct.price).equal(0);
  });
});
