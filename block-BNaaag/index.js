const fs = require('fs');

fs.readFile("./content.md", (err, file) => {
    console.log(file.toString());
});

let syncRead = fs.readFileSync("./content.md", "utf-8");

console.log(syncRead);

let buff1 = Buffer.alloc(10);

console.log(buff1);

buff1.write("Welcome to Buffer");

console.log(buff1.toString());
