//npm i --save-dev @types/lodash
import _ from 'lodash';

const data = [
    {
        username: "Fred",
        role: "admin"
    },
    {
        username: "Mary",
        role: "seller"
    },
    {
        username: "Veronica",
        role: "seller"
    },
    {
        username: "John",
        role: "customer"
    }
]

const respuesta = _.groupBy(data, (item)=>item.role);

console.log(respuesta);