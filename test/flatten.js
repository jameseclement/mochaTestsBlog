let flatten = require("../flatten");
let assert = require("chai").assert;

describe("#flatten()", () => {
  context("When passed array", () => {
    it("should return array", () => {
      assert.isArray(flatten([[1, 2, 3], [1, 2, 3]]));
    });
  });

  context("when passed wrong datatype", () => {
    it("should return string telling you 'Argument must be an Array'", () => {
      assert(flatten("hello") === "Enter an array");
    });
  });

  context("when passed array of 2 arrays", () => {
    it("should return single array containing every element from the input array(s)", () => {
      assert.deepEqual(flatten([[1, 2, 3], [1, 2, 3]]), [1, 2, 3, 1, 2, 3]);
    });
  });

  context("when passed array of 3 arrays", () => {
    it("should return single array containing every element from the input array(s)", () => {
      assert.deepEqual(
        flatten([
          ["dog", "cat", "mouse"],
          ["pig", "horse", "cow"],
          ["lion", "tiger", "bear"]
        ]),
        ["dog", "cat", "mouse", "pig", "horse", "cow", "lion", "tiger", "bear"]
      );
    });
  });
});
