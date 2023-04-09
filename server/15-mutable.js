const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}
console.log('Products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));


const products1 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicious',
    },
}
const productIndex2 = products1.findIndex(item => item.id === update.id);
const productsUpdate = [...products1]
productsUpdate[productIndex2] = {
    ...products1[productIndex2],
    ...update.changes
}
console.log(productsUpdate);