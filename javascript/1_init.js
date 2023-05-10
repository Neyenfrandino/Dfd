// ==============================================================================
// ======================== Declaración y tipos de dato =========================
// ==============================================================================

// cadena (string)
let nombre = 'Neyén';

// booleano
let activo = true;
let eliminado = false;

// entero (int)
let edad = 27;

// Decimal (float)
let pi = 3.1415;

// Fecha (date)
let ahora = new Date();


// ==============================================================================
// =========================== Operaciones  ================================
// ==============================================================================
let numero1 = 3;
let numero2 = 8;
let numero3 = 1;
let numero4 = 2;
let numero5 = 3;

// ================ Operaciones con suma ================

let suma1 = numero1 + numero2;
let suma2 = numero1 + numero2 + numero3 + numero4 + numero5;

// ---------

let nombre = 'Neyén';
let apellido = 'Frandino';
let suma3 = nombre + apellido;
console.log(suma3);


let numero = 7;
let cadena = 'Soy una cadena';
let resultado = numero + cadena;
console.log(resultado);


// Nota: en el operador suma, todas las variables deben ser numero para que se haga una operación aritmética.
// De lo contrario, hará una concatenación. 


// ================ Operaciones con módulo ================

// 7 |__2__
// 1    3

// La división (cociente) es 3
// El residuo (módulo) es 1 --------  mod => %

let numero = 7;
let division = parseInt(7 / 2);
let modulo = 7 % 2;
console.log("La división de " + numero + " entre 2 es: " + division + ". El módulo es: " + modulo);



// ================ Operación relacional: mayor o igual que ================
let entradaParque = 5000;
let efectivo = 10000;
let resultado = efectivo >= entradaParque;
console.log(resultado);


// ================ Operación relacional: igualdad ================
// ==: compara contenido
// ===: compara contenido y tipo de dato


let lilianaEdad = 16;
let neyenEdad = 16;
let resultado = lilianaEdad == neyenEdad;
console.log(resultado);

let anioInt = 2023;
let anioStr = "2023";
let esIgual = anioInt == anioStr;  // este hace una comparación del contenido
console.log(esIgual);

let esIgualConTipoDeDato = anioInt === anioStr; // hace una igualdad incluyendo el tipo de dato
console.log(esIgualConTipoDeDato);




// ================ Operación relacional: desigualdad ================
let nombreA = 'Neyén';
let nombreB = 'Liliana';
let resultado = nombreA != nombreB;
console.log(resultado);

let nombreC = 'Liliana '
let resultado2 = nombreB != nombreC;
console.log(resultado2);


// ================ Operación booleana (lógica) ================

// AND = &&
// OR = ||
// NOT = !

let tendioCama = true; // Declarando variable
let limpioArenero = false; // Declarando variable
let irAlPartido = tendioCama && limpioArenero; // Evaluamos la expresión
console.log(irAlPartido); // Imprimiendo el resultado

// ---------------

let pedirDomicilio = true;
let cocinar = false;
let cenar = pedirDomicilio || cocinar;
console.log(cenar);


// ---------------
// Negación !
let comioGallina = false;
let resultado = !comioGallina;
console.log(resultado);

resultado = !!!!!!!!!!!!!!!!!!!!!!!!!!!comioGallina;
console.log(resultado);