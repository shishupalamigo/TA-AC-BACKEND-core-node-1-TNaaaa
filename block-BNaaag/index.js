const fs = require('fs');

fs.readFile("./content.md", (err, file) => {
    console.log(file.toString());
});

// Sync  code

console.log("Execute me first!");

console.time("task1");
let sum = 0;
for (let i = 0; i < 100000; i++) {
    sum += i;
}
console.log(sum);
console.timeEnd("task1");

console.log("Execute me last!");

// Async code

console.log("I will be executed first");

console.time("asyncTask1");

setTimeout(() => {
    console.log("timeout executed");
    console.timeEnd("asyncTask1");
}, 1000);

console.log("I will be executed last");

let buff1 = Buffer.alloc(10);

console.log(buff1);

buff1.write("Welcome to Buffer");

console.log(buff1.toString());
