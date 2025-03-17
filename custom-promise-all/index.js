/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let count = 0;
    const result = [];

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((res) => {
          result[i] = res;
          count += 1;

          if (count === functions.length) {
            resolve(result);
          }
        })
        .catch(reject);
    }
  });
};

const promise = promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
  () =>
    new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100)),
]);
promise.then(console.log); // [42]
