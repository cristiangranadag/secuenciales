// 2.Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte 
// una cantidad distinta. Obtener el porcentaje que cada uno invierte con respecto a la cantidad total 
// invertida.

let nro1;
let nro2;
let nro3;
let total;
let pro1;
let pro2;
let pro3;

nro1 = Number(prompt('Digite numero #1: '));
nro2 = Number(prompt('Digite numero #2: '));
nro3 = Number(prompt('Digite numero #3: '));

total = nro1 + nro2 + nro3;
pro1 = (100*nro1)/total;
pro2 = (100*nro2)/total;
pro3 = (100*nro3)/total;

alert("El numero #1 "+pro1);