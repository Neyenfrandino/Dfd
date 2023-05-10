function irAlTrabajoEnCarro(){
    // var tengoLlaves; --> aquí declaramos. ¿Está bien en JS?
    // tengoLlaves = false; --> aquí asignamos un valor

    var tengoLlaves = true; // --> aquí declaramos y asignamos valor a la variable

    if (tengoLlaves == true) { // --> aquí aplicamos una condición
        console.log("Listo ahora puedes ir hasta el carro")
    } 
    else {
        console.log("!! Ve a buscar las llaves ¡¡")
    }
}

irAlTrabajoEnCarro();


/*
TAREA
1. Buscar qué es una función en javascript
2. Hacer un ejemplo de una función que imprima el mensaje "Hola mundo"

3. Buscar qué son parámetros de funciones en javascript
4. Escribir una función que muestre el mensaje "Bienvenido/a {nombrePersona}", 
    donde el nombre de la persona sea enviado como argumento. Ej:
    + Bienvenido/a Neyén
    + Bienvenido/a Liliana 

Al final de esta tarea, deben haber 2 funciones.
*/

function imprimirMensaje() {
    console.log ("Hola mundo")
}

function imprimirBienvenida (nombreP){
    let nombreP = "Liliana";
    console.log ("Bienvenda", nombreP)
} 
