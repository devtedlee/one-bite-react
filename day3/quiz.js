let num = 100;
for (let i = 1; i <= num; ++i) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

function isPrimeNumber(num) {
    for (let i = 2; i < num; ++i) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

console.log(calculate(5, 3, add));
console.log(calculate(5, 3, subtract));