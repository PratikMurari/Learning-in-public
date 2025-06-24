const fs = require("fs");
// const fs = require('node:fs'); // Alternative way to import

// Write in a file
//fs.writeFile("file.txt", "hello from NodeJs!", (err) => {
//    if (err) throw err;
//    console.log("the file has been shaved!")
//});

// Read a file

fs.readFile("./file.txt", "Utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); 