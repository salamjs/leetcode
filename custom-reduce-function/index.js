/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let result = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i], i, nums);
  }
  return result;
};

const arr = [1, 2, 3, 4];
function sum(accum, curr) {
  return accum + curr;
}
console.log(reduce(arr, sum, 0));
