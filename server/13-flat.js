const matriz = [
    [1,2,3],
    [4,5,6, [10,11, [12, 13]]],
    [7,8,9]
];

function flattenMatriz(matriz) {
    let array = [];
    for (element of matriz) {
        if (Array.isArray(element)){
            array = array.concat(flattenMatriz(element));
        } else {
            array.push(element);
        }
    }
    return array;
}

console.log('For', flattenMatriz(matriz));

const result = matriz.flat(3);
console.log('Flat', result);