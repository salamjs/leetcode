/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (fn(el, i)) {
      res.push(el);
    }
  }

  return res;
};

const arr = [0, 10, 20, 30];
function greaterThan10(n) {
  return n > 10;
}

console.log(filter(arr, greaterThan10));

function firstIndex(n, i) {
  return i === 0;
}
console.log(filter(arr, firstIndex));
