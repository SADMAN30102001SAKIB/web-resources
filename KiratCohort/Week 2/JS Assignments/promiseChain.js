function wait(t) {
  return new Promise(resolve => {
    setTimeout(resolve, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const start = Date.now();

  return wait(t1)
    .then(() => wait(t2))
    .then(() => wait(t3))
    .then(() => {
      const end = Date.now();
      return end - start;
    });
}

// calculateTime(1, 2, 3).then(time => {
//   console.log(`Sequential time taken: ${time} milliseconds`);
// });

module.exports = calculateTime;
