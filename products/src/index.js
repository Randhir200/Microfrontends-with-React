import faker from 'faker';

const productSize = 6;
let products = '';

for(let i=0; i<productSize; i++){
 const name = faker.commerce.productName();
 products += `<div>${name}</div>`;
}

document.querySelector('#products').innerHTML = products;