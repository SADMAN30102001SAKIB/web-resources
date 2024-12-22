function incrementCounter() {
  const date = new Date();
  console.log(
    `${
      date.getHours() - (date.getHours() > 12 ? 12 : 0)
    }:${date.getMinutes()}:${date.getSeconds()}`,
  );

  setTimeout(incrementCounter, 1000);
}

incrementCounter();
