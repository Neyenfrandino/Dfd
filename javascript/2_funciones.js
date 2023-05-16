/* Estructura de una función
function <nombre_de_funcion>(){
    // ...
}

function <nombre_de_funcion>(param1, param2, ...){
    // ...
}

*/

// Definición de la función
function imprimir() {
    console.log('Hola mundo');
}

// Llamar o invocar a la función
imprimir();


// ----

function darBienvenida(nombrePersona) {
    console.log('Bienvenido/a ' + nombrePersona);
}

darBienvenida('Carlos');
darBienvenida('Juana');
darBienvenida('Juana');
darBienvenida('Juana');
darBienvenida('Juana');


// ----

function imprimirValor(mi_variable) {
    console.log(mi_variable);
}

imprimirValor(false);
imprimirValor('Arepa');
imprimirValor(3.1415);
imprimirValor(new Date());


// -------

function sumar(numero1, numero2) {
    // ...
    // ...
    // ...
    // ...
    // ...
    // ...
    // ...
    suma = numero1 + numero2;
    console.log(suma);
    // ...
    // ...
    // ...
    // ...
    // ...
}

sumar(24, 26 + 26);
sumar(1, 5);
sumar(1, 2 + 3);
sumar(1, 8 / 2);
sumar(1, 2);

//....

// ================ Función con un valor de retorno ================

function multiplicar(numero1, numero2) {
    // ...
    let multiplicacion = numero1 * numero2; // asignación
    return multiplicacion;
}


let popular = multiplicar(2, 3);  // asignación
let general = multiplicar(4, 5);

let total = popular + general;
console.log(total);


function tickets(pereiraCali, caliIpiales, ipialesCali, caliPereira, porcentaje) {
   let suma = (pereiraCali + caliIpiales + ipialesCali + caliPereira);
    let porcentajes = (suma / 100 ) * porcentaje;
    console.log('el total de gastos en tiquetes fue ' + suma + 
                ' y el ' + porcentaje + ' porciento del gastos fue de ' + porcentajes);
     return porcentajes ;
}

let resultado = tickets(37, 110, 80, 50, 30) 










function publicoEnElEstadio(totalPublico){
    let tribunasTrasarcos = (totalPublico / 100) * 15 ;
    let porcentsur = (tribunasTrasarcos / 100) * 15;
    let tribunaNorte = tribunasTrasarcos / 3;
    let tribunasLaterales = (totalPublico / 100) * 35;
    let tribunaOriente = (tribunasLaterales / 100) * 70 ;
    let tribunaOccidente = (tribunasLaterales / 100) * 98 ;
    console.log (porcentsur + ' fuerona a la tribuna sur, a la tribuna norte ' + tribunaNorte + 
    ', a la tribuna oriente fueron ' + tribunaOriente + ' y en la occidente fueron ' + tribunaOccidente )
}
let Estadio = publicoEnElEstadio(87000)
 

 //(sur, norte, oriente, occidente)