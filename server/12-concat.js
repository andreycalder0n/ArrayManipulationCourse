const elements = [1, 2, 3, 4, 5, 6];
const otherElements = [7, 8, 9, 10];

const result = [...elements];

for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    result.push(element);
}

console.log('For', result);

const result1 = elements.concat(otherElements);
console.log('Concat', result1);

const result2 = [...elements, ...otherElements];
console.log('...', result2);