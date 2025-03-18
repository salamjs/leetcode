/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const res = [];

  while (arr.length > 0) {
    res.push(arr.splice(0, size));
  }

  return res;
};

console.log(chunk([1, 2, 3, 4, 5], 2));
