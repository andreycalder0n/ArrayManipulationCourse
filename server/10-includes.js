const pets = ['Fox', 'Cat', 'Dog', 'Hourse'];

let includeInArray = false;

for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'Cat') {
        includeInArray = true;
        break;
    }
}

const result = pets.includes('Cat');
console.log('For', includeInArray);
console.log('Includes', result);