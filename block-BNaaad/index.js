console.log("Welcome to  Node.js");


function sumOfFirstNIntegers(n) {
    let sum = 0;
    for(let i =1; i <= n;  i++){
        sum += i;
    }
    return sum;
}

console.log(sumOfFirstNIntegers(10));
