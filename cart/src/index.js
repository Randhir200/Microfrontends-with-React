import faker from 'faker';

const cartText = `<div> Items in your cart ${faker.random.number()} </div>`

console.log(cartText);

document.getElementById('dev-cart').innerHTML = cartText;