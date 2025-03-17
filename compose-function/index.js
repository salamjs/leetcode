/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  let lastResult = null;

  return function (x) {
    if (!functions.length) return x;

    for (let i = functions.length - 1; i >= 0; i--) {
      lastResult = functions[i](lastResult || x);
    }

    return lastResult;
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9
