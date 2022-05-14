(()=>{
    const login = (data: {email:string, password:string}):void => {
        console.log(`El usuario ${data.email} ha iniciado sesion`);
    }

    login({
        email: 'pepe@pepe.com',
        password: '123456'
    });

    type Sizes = "S"| "M"| "L"| "XL";

    const products: any[] = [];

    const addProduct = (product: {title: string, createdAt: Date, stock: number, size?: Sizes}):any => products.push(product);

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

    console.log(products);
})();