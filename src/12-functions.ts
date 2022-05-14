(()=>{
    type Sizes = "S"| "M"| "L"| "XL";
    //size? is optional parameter
    const createProductToJson = (title: string, createdAt: Date, stock: number, size?: Sizes) => {
        return {
            title,
            createdAt,
            stock,
            size
        };
    }

    const product1 = createProductToJson("Shirt", new Date(), 10);
    console.log(product1);

    const product2 = createProductToJson("Shirt", new Date(), 10, "XL");
    console.log(product2);
})();