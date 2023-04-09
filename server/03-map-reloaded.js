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


const taxes2 = orders.map( item => {
    return {
        ...item,
        tax: item.total * 2,
    };
});

// console.log('original', orders);
// console.log('Result', result);
console.log('Taxes', taxes2);