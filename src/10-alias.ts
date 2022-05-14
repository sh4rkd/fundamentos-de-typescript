(()=>{
    type UserID = string | number ;
    /*let userId: string | number | boolean;
    const greeting = (userId: string | number | boolean) => typeof userId === "string" ? "Hello " + userId : "You're a number " + userId;*/
    let userId: UserID;
    

    // Literal types 
    type Sizes = "S" | "M" | "L" | "XL";
    let shirtSize: Sizes;
    
    const greeting = (userId: UserID, size: Sizes) => typeof userId === "string" ? "Hello " + userId : "You're a number " + userId;

    greeting("John", "M");
    greeting(123, "M");
})();