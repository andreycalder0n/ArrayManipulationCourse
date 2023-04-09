const elements = ['Fire', 'Water', 'Earth', 'Air'];

let result = '';
const separator = ', ';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (index === elements.length - 1) {
        result = result + element;
    } else {    
        result = result + element + separator;
    }
}
console.log('For', result); 

const result1 = elements.join(', ');
console.log('Join', result1);

const title = 'This is a example title';

const result2 = title.split(' ').join('-');
console.log(result2);