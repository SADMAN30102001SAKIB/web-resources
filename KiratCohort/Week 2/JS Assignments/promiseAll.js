function wait(t) {
  return new Promise(resolve => {
    setTimeout(resolve, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const start = Date.now();

  return Promise.all([wait(t1), wait(t2), wait(t3)]).then(val => {
    // console.log(val);
    const end = Date.now();
    return end - start;
  });
}

// calculateTime(1, 2, 3).then(time => {
//   console.log(`Time taken: ${time} milliseconds`);
// });

module.exports = calculateTime;
