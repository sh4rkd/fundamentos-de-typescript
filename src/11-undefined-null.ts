(()=>{
    let myNull: null;
    let myUndefined: undefined;

    let myNumber: number|null = null;
    myNumber = 12;

    let myString: string|null = null;
    myString = "Hello";

    const hi = (name: string|null) => name ? "hello "+name : "Anonymous";

    console.log(hi(null));
    console.log(hi("Fred"));

    function hiV2(name: string|null) {
        let hello = "hello ";
        hello+= name?.toLowerCase() || "Anonymous";
        return hello;
    }

    console.log(hiV2(null));
    console.log(hiV2("Fred"));
})();