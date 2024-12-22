function sleep(milliseconds) {
  return new Promise(resolve => {
    const start = Date.now();
    let now = start;
    while (now - start < milliseconds) {
      now = Date.now();
    }
    resolve();
  });
}

async function test() {
  console.log("Start");
  await sleep(2000);
  console.log("End after 2 seconds");
}

// test();
// console.log("End");

module.exports = sleep;
