let example = null;
example = 'hello';
example = 3.14;
example = true;
example = [1, 2, 3];
example = Symbol('hello');

example = {
    name: 'hello',
    lastName: 'world'
};

example = function (a:any) {
    return a;
}

class Rectangulo{
    constructor(private base:number, private altura:number){}

    getArea(){
        return this.base * this.altura;
    }
}

class Punto{
    constructor(private x:number, private y:number){
        this.x = x;
        this.y = y;
    }

    static getDistance(a:Punto, b:Punto){
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

//scope var typeanotation = value
const productPrice: number = 12;

