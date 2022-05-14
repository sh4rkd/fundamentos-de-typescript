(()=>{
    let userId: string | number;
    userId = "123";
    userId = 123;
    const greeting = (myText: string | number) => typeof myText === "string" ? "Hello " + myText : "You're a number " + myText;
    console.log(greeting("John"));
    console.log(greeting(123));
})();