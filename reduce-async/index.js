function reduceAsync(promises, callback, initial) {
  return new Promise((resolve, reject) => {
    let acc = initial;
    let index = 0;

    function next() {
      if (index >= promises.length) {
        return resolve(acc);
      }

      const currentPromise = promises[index];

      currentPromise
        .then((res) => {
          acc = callback(acc, res);
          index++;
          next();
        })
        .catch(reject);
    }

    next(); // Старт
  });
}
