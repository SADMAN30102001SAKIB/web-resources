//Calculate the time it takes between a setTimeout call and the inner function actually running

let start = new Date().getTime();

setTimeout(() => {
  let end = new Date().getTime();
  console.log(`${end - start} ms`);
}, 1000);

for (let i = 0; i < 3000000000; i++) {
  continue;
}
