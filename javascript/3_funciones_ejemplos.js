function darBienvenida(nombre, apellido){
    // ...dlkalsdkajdlkalsdkaksjdl
    console.log('Dentro de función: Bienvenido/a ' + nombre + ' ' + apellido)
}

darBienvenida('Neyén', 'Frandino');


//--------

function obtenerNombreCompleto(primerNombre, segundoNombre, primeroApellido, segundoApellido){
    // Aquí podrían ir otras líneas de código XYZ...
    let nombreCompleto = primerNombre + ' ' + segundoNombre + ' ' + primeroApellido  + ' ' + segundoApellido;
    return nombreCompleto;
}

otraVariableNombre = obtenerNombreCompleto('Brian', 'Steve', 'Ríos', 'Loaiza');
console.log('Fuera de la función: ' + otraVariableNombre);

// -----------------


let carro = 'mazda';
let otraCosa = ' dajksdlkadl ' + carro;
console.log(otraCosa);

// -------------

function hacerDocumento(dni) {
    // Ir a la bd y obtener el nombre de la persona con ese DNI
    // conexión
    // select con sql
    /*
    SELECT nombre, apellido
    FROM persona
    WHERE dni = '{dni}';
    */
    // ejecutar el sql
    // ...
    let nombreEncontradoEnLaBBDD = 'Huevito'; // vendría de una conexión a bd
    let retorno = nombreEncontradoEnLaBBDD + ', ' + dni;
    return retorno;
    // kdjlsadladl
}

// hacerDocumento('123'); // Brian
// hacerDocumento('456'); // Matías

let cremaParaLasManos = hacerDocumento('789'); // Mateo
console.log('Fuera de la función: ' + cremaParaLasManos);



// Qué debe haber en una línea? !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 1. Asignación
// 2. Llamado a una función


// ===========================================================================================
// Más de 1 return en una función
function esPar(numero){
    let residuo = numero % 2;
    let esNumeroPar = residuo == 0;
    return esNumeroPar;
}

let otroValor = esPar(8);
console.log('Otro valor: ' + otroValor);


function esPar_2caminos(numero){
    let residuo = numero % 2;
    if (residuo == 0) {
        return true;
    } else {
        return false;
    }
}