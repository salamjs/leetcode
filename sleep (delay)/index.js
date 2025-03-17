/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

let t = Date.now();
sleep(5000).then(() => console.log(Date.now() - t)); // 100
