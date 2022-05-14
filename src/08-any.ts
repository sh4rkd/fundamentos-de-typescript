(()=>{
    let myDynamicVar: any;
    myDynamicVar = 10.99;
    myDynamicVar = true;
    myDynamicVar = "Hello";
    myDynamicVar = [10.99, 5.99, 3.99, 6.59];
    console.log(myDynamicVar);

    const convertDynamicString = (myDynamicVar as string).toLowerCase();

    const converDynamicNumber = (<number>myDynamicVar);
})();