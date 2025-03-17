/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let shouldBeCalled = true;

  return function (...args) {
    if (!shouldBeCalled) return;

    shouldBeCalled = false;

    timeoutId = setTimeout(() => {
      shouldBeCalled = true;
    }, t);

    fn.apply(this, args);
  };
};
