# DFD: Lili explica, _wipitiii_ :dance:

## Lógica matemática
Antes de empezar con el mundo mágico de DFD, vamos a mirar algunas cosillas de _lógica matemática_. Let's go!


1. :scroll: [PPT](https://es.slideshare.net/soy_docente_web/lgica-matemticas#2) de _Lógica matemática_
    + ...
1. :movie_camera: [Video](https://www.youtube.com/watch?v=kp7AgE94aCY&ab_channel=Derivando) _¿Tienes lógica matemática?_
    + ...

1. :movie_camera: [Video](https://www.youtube.com/watch?v=kp7AgE94aCY&ab_channel=Derivando) _Operadores lógicos: boolean_
    + ... 

1. :movie_camera: [Video](https://www.youtube.com/watch?v=G53Da_gzsx0&ab_channel=UnboxingPhilosophy) _Lógica y Tablas de Verdad_ (hasta el min 7:08)
1. :framed_picture: [Imagen](https://logicautem.wordpress.com/2016/03/05/tablas-de-verdad/) de tablas de verdad
    + ... 

1. :movie_camera: [Video](https://www.youtube.com/watch?v=hnH_IrQ2bjE&ab_channel=CodigoCompilado) _LP #10| Operadores aritméticos,lógicos y relacionales_
1. :movie_camera: [Video](https://www.youtube.com/watch?v=Y9J1mxbxI0A&list=PLs1sXiNvW4Oz_M029tfkT2GGUYFqWggJ9&index=9&ab_channel=CodigoCompilado) _LP #9| Decisión y Algoritmo_



## 1. Número _par_ o _impar_
Se utilizan los siguientes objetos:
1. Objeto de **salida** para mostrar un mensaje al usuario. Ej: Se le pide un número
2. Objeto de **entrada** para recibir un valor. El valor ingresado por el usuario se guarda en una _variable_
2. Objeto de **condición** para evaluar una expresión. Se evalúa si el número ingresado es par o impar con la operación de comparación **módulo** (`mod`)

## 2. Asignación
Es un objeto que se utiliza para **declarar variables** y/o **asignar valores** a una lista de variables. Este objeto tiene un máximo de 3 renglones.

## 3. Ciclo `FOR`

### 3.1 Explicación
Ciclo **_para_**: este es un ciclo que tiene un límite predefinido.
1. [ ] -> nombre de la variable de iteración: ej `iterador`
2. [ ] -> valor inicial del _iterador_ cuando empieza el ciclo
3. [ ] -> límite del ciclo
4. [ ] -> es el `salto`, es decir, cómo va aumentando el iterador a medida que recorre el ciclo.

### 3.2 Ejercicio
Imprimir la potencia cúbica de los números pares del 1 al 15

1. -> no debería hacer nada, ni mostrar nada
2. -> 2 ^ 3 = 2*2*2 = 8
3. -> nadita
4. -> 4 ^ 3 = 4*4*4 = 64
5. -> nadita
6. -> ...

### 3.3 Prueba
Imprimir el 50% del valor de los números múltiplos de 5 hasta 40.
5--40
numeros multiplos de 5: 5,15,20,25,30,35,40 /2
numero no multiplos nada.

## 4. Ciclo `WHILE`
### 4.1 Explicación
Ciclo **_MQ (mientras que)_**: este es un ciclo que **no** tiene un límite predefinido. Dependerá de la interacción con el usuario y/o con la dinámica del programa.

### 4.2 Ejercicio
Escribir un programa que muestre la potencia cuadrada de un número natural que ingrese el usuario. En caso contrario (que no sea natural), termine el programa mostrando un mensaje final.
- 2 -> 4
- 5 -> 25
- 9 -> 81
- -3 -> mostrar mensaje "bye bye"

### 4.3 Prueba
Dado un número natural ingresado por el usuario, imprimir la cuarta parte de su valor siempre que ese número sea par. Si es impar, imprima la tercera parte del valor. El programa no debe terminar.
Si el número no es natural, termine el programa con un mensaje final "Chao mundo!"

<div>
    X numero natural par = x/4
    X numero natural impar = x/3
    no terminar 
<div>
<div>
    numero no natural = se cierra el programa con un !chao mundo!
<br>



# DFD: Ne, Ejercicios de práctica 
1. **[x]** Dado la edad del usuario, indicar si es mayor o menor de edad.
1. **[x]** Dada la población electoral de Bogotá (el lugar más hermoso del mundo), muestre la cantidad mínima de votos que necesita un candidato para ser elegido "Alcalde mayor de la ciudad".
1. **[X]** Dado un número, mostrar un único mensaje al usuario indicando si es par o no.
1. [x] De los primeros 16 números naturales, mostrar los múltiplos de 2.
1. [ ] Pedir 2 números e imprimir cuál es el mayor y cuál es el menor.
1. [ ] Pedir 3 números al usuario y mostrar un mensaje final con la suma y el promedio.


# Casos especiales
## Módulo
En la operación de división, el **módulo** es el **residuo**. Sirve para evaluar expresiones de tipo "_par o impar_", "_múltiplo de `X`_", etc. Ejemplos:
1. ¿Es par? -> `my_variable MOD 2 = 0`
1. ¿Es impar? -> `my_variable MOD 2 = 1`
1. ¿`x` es múltiplo de `y`? -> `x MOD y = 0`. --> **Siempre** debe ser `= 0`.
    - ¿**40** es múltiplo de **5**? -> La expresión `40 MOD 5`, da como resultado **0**, entonces **sí** es múltiplo :white_check_mark:
    - ¿**39** es múltiplo de **5**? -> La expresión `39 MOD 5`, da como resultado **4**, entonces **no** es múltiplo :x:


# Workshop / Taller

1. Dado un número ingresado por el usuario, imprimir si es un número primo o no.
1. Crear un programa que calcule la suma de los primeros `{n}` números enteros.
1. Hacer un programa para determinar si Neyén puede hacer push o no. Las reglas de este programa quedan a criterio del programador. (La idea es que sea lo más completo posible para que Lili no lo corche)
1. Calcular el factorial de un número ingresado por el usuario y mostrarlo en pantalla.
1. Calcular el MCD (Máximo Común Divisor) de 2 números ingresados por el usuario
1. Calcular el MCM (Mínimo Común Múltiplo) de 2 números ingresados por el usuario
1. Hacer un programa para indicar si Neyén y Lili pueden ir a comer. Mostrar mensajes de alerta en cada posible escenario. (Que Lili no lo corche!)
1. Hacer la secuencia de Fibonacci
1. Simular un programa de consola (#TODO: (Pendiente) definir el resto del problema)
