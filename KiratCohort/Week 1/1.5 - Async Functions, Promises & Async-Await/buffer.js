var fs = require("fs");
fs.readFile("a.txt", "", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    const binaryStrings = Array.from(data).map(byte =>
      byte.toString(2).padStart(8, "0"),
    );
    console.log(binaryStrings);
  }
});
