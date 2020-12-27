const expect = require("chai").expect;

const CarInsurance = require("./car-insurance");
const NormalProduct = require("../product/normal-product");

describe("CarInsurance Test", function () {
  it("should create a CarInsurance instance with no products", function () {
    const carInsurance = new CarInsurance();
    const products = carInsurance.updatePrice();
    expect(products.length).equal(0);
  });
  it("should create a CarInsurance instance with 1 product named foo", function () {
    const carInsurance = new CarInsurance([new NormalProduct("foo", 0, 0)]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("foo");
  });
});
