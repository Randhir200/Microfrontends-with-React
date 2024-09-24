import faker from "faker";

let products = "";
let productSize = 50;

for(let i=0; i<productSize; i++){
    const name = faker.commerce.productName();
    products += `<div> ${name} </div>`;
}

document.querySelector("#dev-products").innerHTML = products;