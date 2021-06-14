
console.log('Welcome to Nodejs');

const os = require('os');

let cpus = os.cpus().length;
console.log(cpus);

let freeM = os.freemem();
console.log(freeM);

let upTime = os.uptime();
console.log(upTime);

const {readFile, unlink} = require('fs');

let content = readFile('./content.md', 'utf-8', (content) => {
    console.log(content);``
});


let buff1 = Buffer.alloc(15);

let buff2 = Buffer.allocUnsafe(12);
buff2.write("Hello Buffer!")

console.log(buff2.toString());


// Blocking code

console.log("First");
console.time('task1');
for(let i = 0; i < 100000000; i++){

}
console.timeEnd("task1");
console.log('Last');

// Non-blocking code

console.log("First, Non-Block");
setTimeout(() => {
    console.log("Second, Non-Block");
}, 2000);

console.log("I will be executed before second");









