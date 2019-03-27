let cube = require("../cube");
let assert = require("chai").assert;

describe("#cube()", () => {
  context("when passed wrong datatype", () => {
    it("should return 'Can only cube numbers'", () => {
      assert(cube("hello") === "Can only cube numbers");
    });
  });

  context("when passed correct datatype", () => {
    it("should return truthy value", () => {
      assert.isOk(cube(10));
    });
    it("should not return a string", () => {
      assert.isNotString(cube(10));
    });
  });

  context("When passed a positive whole number", () => {
    it("should return a number", () => {
      assert.isNumber(cube(4));
    });
    it("should the cube of that number", () => {
      assert.equal(cube(4), 64);
    });
  });

  context("When passed a negative number", () => {
    it("should return a number", () => {
      assert.isNumber(cube(4));
    });
    it("should the cube of that number", () => {
      assert.equal(cube(-4), -64);
    });
  });

  context("When passed a decimal", () => {
    it("should return the cube accurately", () => {
      assert.equal(cube(4.5), 91.125);
    });
  });

  context("When passed 1", () => {
    it("should not have any deep keys (this should be obvious)", () => {
      assert.doesNotHaveAnyDeepKeys(cube(1));
    });
  });
});
