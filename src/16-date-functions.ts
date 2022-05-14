import { subDays, format } from "date-fns";

const date = new Date(1998, 1, 28);
const respuesta = subDays(date, 30);
const str = format(respuesta, "dd/MM/yyyy");

console.log(str);