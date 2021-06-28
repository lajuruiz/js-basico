//factorial


function factorialW(n){
    var i=1;
    var acumulador=1;
    while( i<=n) {
        acumulador=acumulador * i 
        i++
    }
    return acumulador
}


// funciones 
// arrays 
//1.  funcion que obtiene el valor para una posicion determinada.

var arraypP=[1,2,3,4,5,6,7,8,0,10];

function obtenerPosicion(array,i){
    return array[i]
}

obtenerPosicion(arraypP,5)


//2 Función que elimina un elemento de un array para una posición determinada.
var arrayd=["hola","me","llamo","django","y","soy","feliz"]

function eliminarPosicion(array,index){
    var eliminar=array.splice(index,1)
}
// index:posicion del array que voy a eliminar 
    eliminarPosicion(3,1)



//3. Función que hace una copia de un array determinada
function copiaArray(array){
     var copiar= array.slice(0,array.length)
    console.log(copiar);
}
var arrayC=["hola","django","laura","nelson","<3",":D","L",1,2,3,4,5,6,7]
copiaArray(arrayC)


//4 Función que agrega un nuevo elemento en una posición específica en un array
// array.splice agregar elementos en cualquier posicion

var array2=[1,0,2,3,4,5,6,7,8,9,10];

function agregarElemento(array,posicion, elemento){
    array.splice(posicion,0,elemento)
    return array
}

agregarElemento(array2,8,"te amo nel")


//array.push agregar al final del array 
var array2=[1,0,2,3,4,5,6,7,8,9,10];
function agregarElemento(array, elemento){
    array.push(elemento)  
    return array 
}
agregarElemento(array2,"hola <3")

//5 Función que devuelve un sub array de la posición a a la posición b
// no usar el slice.

function getArray(array,a,b){
    var subarray=[];
    for (var i=0;i<array.length; i++){
        if (a<=i && i<=b){
            subarray.push(array[i]);
        }
    }
    return subarray
}

var numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,1,2,5,8,9,6,0]
getSubArray(numeros,2,16)

// funciones generales

//1. Crear una función que reciba un valor cualquiera y lo muestre ocupando console.log(), 
//llamar a la función pasando el valor 5

function mostrarValor(x){
    console.log(x)
}

//2. La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla

  function multiply(a, b){
    return a * b
  }

  multiply(2, 508)  
//3. Crear una función que reciba dos valores y devuelva la suma de ellos.

function sumarNum(a,b){
    return a+b
}
sumarNum(18,1025878)

//4. Crear una función que reciba un número entero y muestre un error si el tipo 
//de dato pasado es de otro tipo.

function mostrarError(x){
    if (typeof x !== "number"){
        throw Error("No es de tipo numero")
    }
}
tipoDato(50)

//Crear una función autoejecutable que muestre "muuu" en pantalla 

function miFuncion(){
    console.log("muuuu")
}

miFuncion();


//operaciones basicas

//1.
var x=(+(prompt("ingresar numero")));
var y=(+(prompt("ingresar numero 2")));

console.log(x+y);


//2.
var a=[1,2,3];

typeof a 
console.log(typeof a)

//11. El siguiente código tiene un error que se produce en algunos casos especiales, descubrirlo y arreglarlo:

 // Obtener edad

 if(edad <= 13) {
 	console.log("Es niño");
 }if(edad <=18 ){
  	console.log("Es adolecente");
 } else{
  	console.log("Es adulto");
 }

 var edad=15;

 //4. Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.

var x=(+(prompt("ingresar numero")));
var y=(+(prompt("ingresar numero 2")));

    if( x>y){
    console.log("x es el numero mayor ")
}
    else {
    console.log("y es el numero mayor ")
}

//5 Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario.


var x=(+(prompt("ingresar numero")));
var y=(+(prompt("ingresar numero 2")));

x>y?"x es el numero mayor":"y es el numero mayor"


//6. Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.

var m=prompt("introducir mensaje")
if(!isNaN(+(m[0]))){
    document.write(" str empieza con un numero "  + ("<br>"))
}
else {
    document.write("str empieza con una letra"+ ("<br>") )
}



//10 Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de "No corresponde"


var m=(+(prompt("introducir numero")));
if (m === numeroAleatorio){
    var numeroAleatorio = Math.floor((Math.random()*(10-1+1))+ 1);
    console.log("buen trabajo");
}
else{
    console.log("No corresponde");
}

//loops

//1.Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.

var n= prompt("ingresar numero n ");
var i=1;

while(i<=n){
    console.log(i)
    i++
}

//2Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.

var n= prompt("ingresar numero n ");
var i=1;

while(i<=n){
    var i=(i+2)
    console.log(i)
    i++   
}


//3 Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.

var n= prompt("ingresar numero n ");  //15
var i=1;
while(n>=i){
    console.log(n)
    n=n-1
}
//15,14,13,12,11,10,9,8,7,6,5,,4,3,2,1

//4.Escribir utilizando console.log la tabla del 9 hasta 9x10.

var i=1
    while(i<=10){
        console.log("9 x ",i, "=",9*i)
        i++
    }


// Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras.

var number=prompt("ingresar numero");
var acumulador=0;
var i=0;
while(i<number){
    if(!isNaN (+(number[i]))){
        acumulador += +number[i]
        console.log("es un numero")
        i++
    }
    else {
        console.log("es una letra")
    }
}
console.log(acumulador)

//arrays 
// 1. Dado el array = [1,2,3,4,5,6]
//Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.


var array=[1,2,3,4,5,6];
var i=0;
while(i<array.length){
    document.write(array[i])
    i++
}
//Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
var array=[1,2,3,4,5,6];
var i=0;

array.forEach(function(elemento,indice,array){
    document.write(elemento)
});

//Mostrar todos los elementos dentro de un array sumándole uno a cada uno.

var array=[1,2,3,4,5,6];
var i=0;
while(i<array.length){
    array[i]=array[i] + 1
    document.write(array[i])
    i++
}

//Generar una copia de un array pero con todos los elementos incrementado en 1.

var array=[1,2,3,4,5,6];
var copia=array.slice(0,array.length);
var i=0;
while(i<copia.length){
    copia[i]=copia[i] + 1
    document.write(copia[i])
    i++
}

//Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.

function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var array1=[]
for (var i=0; i<20; i++){
    array1.push(getRandomInt(0,20))
}
console.log(array1);

////////////nuevos ejercicios////////////   revisar con nelson
//Ejercicios de divisores con while (o for)
//Encontrar todos los divisores de un número.

var divisorN=prompt("introducir numero");
var i=1;

while(i<= divisorN){    
    while (i<=n){
        acumulador += i
        document.write(i)
        i++
    }
    console.log(acumulador)
    i++
}

/////////////////////////////////////////////COMPLICADO///////////////////////////////////////////////
//Determinar si un número ingresado por el usuario en un loop es primo o no, 
//validar que el número ingresado sea mayor o igual a dos.


var numero = +prompt("introducir numero");
var esPrimo=true;
// Todos son inocentes hasta que se demuestra lo contrario
for(var i=2;i<numero;i++){
    if(numero%i ===0){
        esPrimo = false 
    }
}
if(esPrimo){
    document.write("es primo")
}
else{
    document.write("no es primo")
}


//opcion 2 (revisar bien )
var numero=prompt("introducir numero");
var esPrimo=true;
for(var i=2;i<numero;i++){
    esPrimo &= numero%i !==0
}
if(esPrimo){
    document.write("es primo")
}
else{
    document.write("no es primo")
}
var divisorN=prompt("introducir numero");
var i=1;

while(i<= divisorN){
    if (divisorN %i ===0 ){
        document.write(i)
    }
    i++
}


////Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto 
//si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3)

var numperfect=(+(prompt("introducir numero")));
var acumulador=0;
for(var i=1; i<numperfect;i++){
    if(numperfect%i === 0){
        acumulador += i
    }
}
if(numperfect=== acumulador){
    document.write("Es un numero perfecto") 
}
else{
    document.write("No es un numero perfecto")  
}

//BONUS//
// 1. CREAR UNA FUNCION QUE DEPENDIENDO DE UN NUMERO N IMPRIMA UNA FIGURA COMO LA SIGUIENTE
//n=1 "a", n=2 "a" "aa"

function imprimirFigura(n){
    for(var i=1; i<=n;i++){
        document.write("<br>")
        for(var j=0;i>j;j++){
        document.write("a")
        }
    }
}




//### Doble loop
//Generar los primeros N números primos, donde n es ingresado por el usuario.

var n=(+(prompt("introducir numero")));
for(var i=2;i<n;i++){
    var esPrimo=true
    var j=2

    while (j<i){
        if(i%j === 0){
            esPrimo = false 
        }
        j++
    }

    if(esPrimo){
        document.write(i + "<br />")
    }
}
//### Doble loop
//Generar los primeros N números primos, donde n es ingresado por el usuario.

var n = +prompt("introducir numero");
for(i=2;i<n;i++){
    var esPrimo=true

    for(var j=2;j<i;j++){
        if(i%j === 0){
            esPrimo = false 
        }
    }

    if(esPrimo){
        document.write(i + "<br />")
    }
}


//Generar los primeros N números perfectos.


var n=(+(prompt("introducir numero")));
for(var i=1; i<n;i++){
    var acumulador=0;
    for(j=1; j<i;j++){
        if(i%j === 0){
            acumulador += j
        }
    }

    if(i === acumulador){
        document.write(i + "<br />")
    }
}



//String y arrays

//El usuario ingrese un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5])


//Convertir un array ingresado dentro del código en un string (existe un método en javascript para hacerlo)



//Existen dos arrays, cada uno con 5 palabras, 
//generar un nuevo array con la intersección de ambos elementos.
//(Ejemplo: [1,2,3] unión [1,2,4] = [1,2]

var ax=[1,2,3,4,5];
var bx=[1,2,3,6,7];


//Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la unión de ambos elementos, (Ejemplo: [1,2,3] unión [1,2,4] = [1,1,2,2,3,4]

var array1=[1,2,3,4,5];
var array2=[1,1,2,3,4];

var array3=array1.concat(array2)
document.write(array3);