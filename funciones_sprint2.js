// Create a function for calculating the factorial of a given number x
//for
function factorialF(n){
    var acumulador=1;
    for (var i=1; i<=n; i++) {
        acumulador=acumulador * i 
    }
    return acumulador
}
factorialF(5)

//while

function factorialW(n){
    var i=1;
    var acumulador=1;
    while( i<=n) {
        acumulador=acumulador * i 
        i++
    }
    return acumulador
}
factorialW(5)

//recusiva

function factorialR(n){
    if (n>=0){
        return 1
    }
    else{
        return n * factorialR (n-1)
    }
}



// Create at least 5 functions for working with arrays
// arrays 
//1.  funcion que obtiene el valor para una posicion determinada.

var array=["x","y","z","d"]
function posicionArrays(array,i){
  return array[i]
}
posicionArrays(array,2)


 //2. Función que elimina un elemento de un array para una posición determinada.

 var frutas=["lulo","fresa","mora","uva","limon"];
 function eliminarPosicion(mi_array,index) {
    var eliminar=mi_array.splice(index,1)
}

eliminarPosicion(frutas)


//3. Función que hace una copia de un array determinada

var arrayx=[1,2,3,4,5,6,7,8,10];

function copiaArray1(array){
    var copiaArray=array.slice(0,array.length);
    return copiaArray
}

copiaArray1(array)


//4. función que agrega un nuevo elemento en una posición específica en un array

var arr=["hola","mundo","l","d","n","django"];

function agregarElementos(array,elemento,posicion){
    array.splice(posicion,0,elemento);
    return array
}

agregarElementos(arr,"ho",2);

//forma compleja (revisar)
function agregarElementoComplicado(array,elemento,posicion){
    var array1 = array.slice(0, posicion)
    var array2 = array.slice(posicion + 1, array.length)
    return array1.concat([elemento]).concat(array2)
}

//5 Function that returns a sub-array from position a to position b (similar to how slice works, do not use slice).

function getSubArray(array,a,b){
    var subArray=[];
    for(var i=0;i<array.length; i++){
        if (a<=i  && i<=b){
            subArray.push(array[i])
        }
    }
        return subArray
}
var numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,1,2,5,8,9,6,]
getSubArray(numeros,2,14)


//Patrones con Loop anidados
//Dibujar los siguientes patrones ocupando 
//document.write, para rellenar los espacios vacíos se debe imprimir un espacio 
//vacío.

//1.Cuadrado lleno:

function hacerCuadrado(altura){
    for (j=1; j<=altura;j++){
        document.write("<br>")
        for (var i=1;i<=altura;i++){
            document.write("*")
        }
    }
}

//opcion 2 separar funciones
function dibujarLinea(anchura){
    document.write("<br>")
    for (var i=1;i<=anchura;i++){
        document.write("*")
    }
}

function dibujarCuadrado(altura){
    for (j=1; j<=altura;j++){
        dibujarLinea(altura)
    }
}

dibujarCuadrado(5) 

//2. cuadrado hueco 

function dibujarLineaHueca(anchura, lineaCompleta){
    document.write("<br>")
    for (var i=1;i<=anchura;i++){
        if(i===1 || i===anchura || lineaCompleta){
            document.write("*")
        }
        else{
            document.write(" &nbsp;")
        }
    }
}

function dibujarCuadradoHueco(altura){
    for (j=1; j<=altura;j++){
        dibujarLineaHueca(altura,j===1 || j===altura)
    }
}

//3.tablero ajedrez

function dibujarLineaAjedrez(anchura, paridad){
    document.write("<br>")
    for (var i=1;i<=anchura;i++){
        if(i%2===paridad){
            document.write("* ")
        }  
        else{
            document.write(" &nbsp; ")
        }
   }
}

function dibujarCuadradoAjedrez(altura){
    for (j=1; j<=altura;j++){
        dibujarLineaAjedrez(altura, j%2)
    }
}

//4 piramide izquierda 

function hacerPiramide(altura){
    for (i=1; i<=altura;i++){
        document.write("<br>")
        for (var j=0;i>j;j++){
            document.write("*")
        }
    }
}

// 5. piramide centrada

function piramideCentrada(altura){
    var astericos=1
    for (var j=1;j<=altura; j++){
        document.write("<br>")
        for(var i=1; i<=astericos;i++){
            document.write("*")
        }
        astericos=astericos+2;
    } 
}

///piramide invertida

function piramideCentradaInvertida(altura){
    var astericos=altura+(altura-1)
    for (var j=1;j<=altura; j++){
        document.write("<br>")
        for(var i=1; i<=astericos;i++){
            document.write("*")
        }
        astericos=astericos-2;
    } 
}

// diamante 

function piramideCentrada(altura){
    var astericos=1
    for (var j=1;j<=altura; j++){
        document.write("<br>")
        for(var i=1; i<=astericos;i++){
            document.write("*")
        }
        astericos=astericos+2;
    } 
}

function dibujarLinea(anchura){
    document.write("<br>")
    for (var i=1;i<=anchura;i++){
        document.write("*")
    }
}

function piramideCentradaInvertida(altura){
    var astericos=altura+(altura-1)
    for (var j=1;j<=altura; j++){
        document.write("<br>")
        for(var i=1; i<=astericos;i++){
            document.write("*")
        }
        astericos=astericos-2;
    } 
}























// funciones
//1. Crear una función que reciba un valor cualquiera y lo muestre ocupando console.log(), llamar a la función pasando el valor 5

function recibirValor(valor){
    console.log(valor)
}


//2 La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla

function multiply(a, b){
    return a * b
  }


//Crear una función que reciba dos valores y devuelva la suma de ellos.

function sumarNumeros(x,y){
    return x+y
}

sumarNumeros(8,10)

//Crear una función que reciba un número entero y muestre un error si el tipo de dato pasado es de otro tipo.

function tipoDato(x){
    if (typeof x !== "number"){
        throw Error("No es de tipo numero")
    }  
}

tipoDato(10)


// Crear una función autoejecutable que muestre "muuu" en pantalla

function miFuncion(){
    console.log(" muu");
}

miFuncion();






















RETO
function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }


  // function autos(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
var marcaArray = ["TESLA", "NISSAN", "TOYOTA", "HONDA"];
var modeloArray = ["2020", "MODEL X", "COVID19"];
var annioArray = [2018, 2019, 2020];
for(var i=0; i<=30; i++){
    var random0 = Math.floor(Math.random() * marcaArray.length);
    var marca = marcaArray[random0];
    var random1 = Math.floor(Math.random() * modeloArray.length);
    var modelo = modeloArray[random1];
    var random2 = Math.floor(Math.random() * annioArray.length);
    var annio = annioArray[random2];
    var autoNuevo = new autos(marca, modelo, annio);
    console.log(autoNuevo);
}