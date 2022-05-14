(()=>{
    let productPrice = 100;
    productPrice = 12;
    console.log("productName " + productPrice);

    let customeAge: number = 28;
    customeAge = customeAge + 1;
    console.log("customerAge " + customeAge);

    let productInStock: number;
    console.log("productInStock " + productInStock);
    productInStock > 10 ? console.log("productInStock " + productInStock) : console.log("productInStock " + productInStock);

    let discount = parseInt("100");
    console.log("discount " + discount);
    discount <= 200 ? console.log("apply " + discount) : console.log("not apply " + discount);

    let hex = 0xf00d;
    console.log("hex " + hex);

    let bin = 0b1010;
    console.log("bin " + bin);

    const myNumber:number = 10;
    console.log("myNumber " + myNumber);
})();