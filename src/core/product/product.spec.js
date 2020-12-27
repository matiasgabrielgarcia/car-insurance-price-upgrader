const expect = require("chai").expect;

const Product = require("./product");

describe("Product Test", function () {
  let product;
  beforeEach(function () {
    product = new Product("Some product", 10, 20);
  });

  it("should create a product named Some product", function () {
    expect(function () {
      aProduct = new Product("Some product", 10, 20);
      aProduct.updatePrice();
    }).to.throw(Error);
  });

  it("should create a product named Some product", function () {
    expect(product.name).equal("Some product");
  });

  it("should create a product with sellIn = 10", function () {
    expect(product.sellIn).equal(10);
  });

  it("should create a product with price = 20", function () {
    expect(product.price).equal(20);
  });
});
