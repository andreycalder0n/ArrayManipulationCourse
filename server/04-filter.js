// const words = ["Jubilant", "Melancholy", "Serendipity", "Ephemeral", "Perplexed", "Quixotic", "Ubiquitous", "Luminous", "Pensive", "Resilient"];

// const newArray = [];

// for (let index = 0; index < words.length; index++) {
//     const item = words[index];
//     if (item.length > 7) {
//         newArray.push(item);
//     }
// }

// console.log('Words', words);
// console.log('NewArray', newArray);

// const result = words.filter(item => item.length > 7);
// console.log('WithFilter', result);

const orders = [
    {
        customerName: 'Pepe',
        total: 100,
        delivered: true,
    },
    {
        customerName: 'Juana',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Jorge',
        total: 50,
        delivered: false,
    },
    {
        customerName: 'Ana',
        total: 75,
        delivered: true,
    },
    {
        customerName: 'Jina',
        total: 80,
        delivered: true,
    },
];

const ordersDelivered = orders.filter( item => item.delivered );
console.log('Delivered', ordersDelivered);

const search = (query) => {
    return orders.filter( item => {
        return item.customerName.includes(query);
    })
}
console.log(search('a'));