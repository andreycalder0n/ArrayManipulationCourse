// const items = [1, 7, 2, 2, 4, 2, 5, 7];

// const result = items.reduce((obj, item) => {
//     if (!obj[item]) {
//         obj[item] = 1;
//     } else {
//         obj[item] = obj[item] + 1;
//     }
//     return obj;
//     }, {});

// console.log('Items', items);
// console.log('Amount', result);

// const jsSkills = [
//     { name: 'JavaScript Fundamentals', level: 'Intermediate' },
//     { name: 'ES6+', level: 'Advanced' },
//     { name: 'Async Programming', level: 'Intermediate' },
//     { name: 'Functional Programming', level: 'Advanced' },
//     { name: 'Object-Oriented Programming', level: 'Intermediate' },
//     { name: 'DOM Manipulation', level: 'Intermediate' },
//     { name: 'ReactJS', level: 'Advanced' },
//     { name: 'NodeJS', level: 'Intermediate' },
//     { name: 'Webpack', level: 'Intermediate' },
//     { name: 'Testing (Jest/Mocha)', level: 'Intermediate' }
// ];

// const levelClassification = jsSkills
// .map( item => item.level)
// .reduce((obj, item) => {
//     if (!obj[item]) {
//         obj[item] = 1;
//     } else {
//         obj[item] = obj[item] + 1;
//     }
//     return obj;
// }, {});

// console.log('Level clasification', levelClassification);

const randomNumbers = [];

for (let i = 0; i < 100; i++) {
    randomNumbers.push(Math.trunc(Math.random() * 10) + 1);
}

const result = randomNumbers.reduce((obj, item) => {
    if (item <= 5) obj['1-5'] += 1;
    else if (item < 9) obj['6-8'] += 1;
    else obj['9-10'] += 1;

    return obj
}, {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0,
});

console.log(randomNumbers);
console.log(result);