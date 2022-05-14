import {addProduct, calcStock, products, calcStockBySize} from "./product.service";
addProduct({
    title: 'Shirt',
    createdAt: new Date(),
    stock: 10
});

addProduct({
    title: 'Pants',
    createdAt: new Date(),
    stock: 10,
    size: 'XL'
});

addProduct({
    title: 'Shoes',
    createdAt: new Date(1993, 7, 1),
    stock: 10
});

console.log(products);

const total = calcStock();

console.log(total);