(()=>{
    let mixed:(number|boolean|string)[] = [10.99, 5.99, 3.99, 6.59];
    mixed.push(true);
    mixed.push("Hello");
    console.log(mixed);

    let arrayObject:Object[];
    arrayObject = [{name: "John"}, {name: "Jane"}];
    arrayObject.push({name:"John", age:30});
    arrayObject.push([]);
    console.log(arrayObject);
})();