(()=>{
    type Sizes = "S"| "M"| "L"| "XL";
    type Product = {
        title: string, createdAt: Date, stock: number, size?: Sizes
    };

    const products: Product[] = [];

    const addProduct = (product: Product) => products.push(product);

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
})();