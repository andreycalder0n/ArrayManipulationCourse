const numbers = [1, 23, 12, 4, 24, 2, 1, 6, 16];

let result = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        result = false;
    }
}

console.log('For', result);

const result1 = numbers.every(item => item <= 40);

console.log('Every', result1); 