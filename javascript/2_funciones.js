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
    let valor = (suma / 100 ) * porcentaje;
    /*console.log('el total de gastos en tiquetes fue ' + suma + 
                ' y el ' + porcentaje + ' porciento del gastos fue de ' + porcentajes);*/
     return valor;
}
let porcentaje = 30;
let resultado = tickets(37, 110, 80, 50, porcentaje)
console.log('El ' + porcentaje + '% del gasto total de los tikecks fue de ' + resultado);








function publicoEnElEstadio(capacidadEstadio){
    let tribunasTrasarcos = (capacidadEstadio / 100) * 15 ;
    let tribunaSur = (tribunasTrasarcos / 100) * 15;
    let tribunaNorte = tribunasTrasarcos / 3;
    let tribunasLaterales = (capacidadEstadio / 100) * 35;
    let tribunaOriente = (tribunasLaterales / 100) * 70 ;
    let tribunaOccidente = (tribunasLaterales / 100) * 98 ;
    let totalAsistencias = tribunaSur + tribunaNorte + tribunaOriente + tribunaOccidente;
    /*console.log ('La capacidad del estadio es de ' + capacidadEstadio + ' a la tribuna sur asistieron ' + 
        tribunaSur + ', a la tribuna norte asistieron ' + tribunaNorte + ', a la tribuna oriental asistieron '
         + tribunaOriente + ' y a la tribuna occidental asistieron ' + tribunaOccidente + ' y el total de asistencias fue de ' + totalAsistencias)*/
    totalAsistencias = parseInt(totalAsistencias);
    return totalAsistencias;

    //return parseInt(totalAsistencias); 
}
let Estadio = publicoEnElEstadio(87000)
console.log(Estadio)
 


// -----



function obtenerPorcentaje(numero, divisor, factor){
    // let division = numero / divisor;
    // let multiplicacion = division * factor;
    // return parseInt(multiplicacion);

    return numero / divisor * factor;
}

function publicoEnElEstadioCopia(capacidadEstadio){
    let tribunasTrasarcos = obtenerPorcentaje(capacidadEstadio, 100, 15);
    let tribunaSur = obtenerPorcentaje(tribunasTrasarcos, 100, 15);
    let tribunaNorte = obtenerPorcentaje(tribunasTrasarcos, 3, 1);
    let tribunasLaterales = obtenerPorcentaje (capacidadEstadio, 100,  35);
    let tribunaOriente =obtenerPorcentaje (tribunasLaterales, 100, 70) ;
    let tribunaOccidente = obtenerPorcentaje(tribunasLaterales ,100, 98);
    let totalAsistencias = tribunaSur + tribunaNorte + tribunaOriente + tribunaOccidente;
    /*console.log ('La capacidad del estadio es de ' + capacidadEstadio + ' a la tribuna sur asistieron ' + 
        tribunaSur + ', a la tribuna norte asistieron ' + tribunaNorte + ', a la tribuna oriental asistieron '
         + tribunaOriente + ' y a la tribuna occidental asistieron ' + tribunaOccidente + ' y el total de asistencias fue de ' + totalAsistencias)*/
    totalAsistencias = parseInt(totalAsistencias);
    return totalAsistencias;

    //return parseInt(totalAsistencias); 
}
let Estadio = publicoEnElEstadioCopia(87000)
console.log(Estadio)






let cualquiera = 7.5

parseInt(cualquiera) //para sacar la parte entera 
7
Math.ceil(cualquiera) //numero entero haciua arriba 
8
Math.floor(cualquiera) //numeor entero hacia abajo 
7