function cube(num) {
  if (typeof num == "number") {
    return num ** 3;
  } else {
    return "Can only cube numbers";
  }
}

module.exports = cube;
