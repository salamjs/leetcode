/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const stringInt = digits.join("");

  if (stringInt.length > Number.MAX_SAFE_INTEGER.toString().length) {
    return BigInt(+stringInt) + BigInt(1);
  }

  return (+digits.join("") + 1).toString().split("").map(Number);
};

// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
console.log(
  plusOne([
    5, 2, 2, 6, 5, 7, 1, 9, 0, 3, 8, 6, 8, 6, 5, 2, 1, 8, 7, 9, 8, 3, 8, 4, 7,
    2, 5, 8, 1, 0,
  ])
);
