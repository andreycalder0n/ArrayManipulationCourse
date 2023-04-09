const numbers = [ 1, 24, 2, 3, 54, 33, 57, 2, 4, 6, 1 ];

let result = undefined;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 2) {
        result = element;
        break;
    }
}
console.log('For', result);

const result1 = numbers.find(item => item === 2);
console.log('Find', result1);

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];

const result2 = products.find(item => item.id === '🌭');
console.log('Find', result2);
const result3 = products.findIndex(item => item.id === 'jojo');
console.log('FindIndex', result3);
