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
