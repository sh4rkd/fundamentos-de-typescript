(()=>{
    //despues de los parentesis y antes del arrow function se le especifica el tipo de dato del return
    //const name = (): type => {}
    const calcTotal = (prices: number[]): number => prices.reduce((acc, price) => acc + price, 0);
    console.log(calcTotal([10, 20, 30]));

    const printTotal = (prices: number[]): void => console.log(`El total es ${calcTotal(prices)}`);
    printTotal([10, 20, 30]);
})();