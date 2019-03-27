function flatten(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((memo, a) => {
      return [...memo, ...a];
    });
  } else {
    return "Enter an array";
  }
}

module.exports = flatten;
