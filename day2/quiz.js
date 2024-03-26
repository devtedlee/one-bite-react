// quiz 1

const x = 15;
const y = 20;

let max = x > y ? x : y;

console.log(max)

// quiz 2

const a = true;

switch (typeof a) {
    case 'number': 
        console.log('숫자');
        break;
    case 'string':
        console.log('문자열');
        break;
    case 'boolean':
        console.log('불리언');
        break;
}

// quiz 3

let temperature = 10;

let msg;
if (temperature < 0) {
    msg = '매우 추움';
} else if (temperature >= 0 && temperature < 10) {
    msg = '추움';
} else if (temperature >= 0 && temperature < 20) {
    msg = '적당';
} else if (temperature > 20) {
    msg = '더움'
}

console.log(msg);
