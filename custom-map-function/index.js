/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i));
  }

  return res;
};

const arr = [1, 2, 3];

function plusone(n) {
  return n + 1;
}

function plusI(n, i) {
  return n + i;
}

console.log(map(arr, plusone));
console.log(map(arr, plusI));
