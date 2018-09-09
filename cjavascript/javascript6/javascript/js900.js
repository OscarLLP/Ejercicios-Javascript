/**let ruta = window.location;
console.log("ruta "+ ruta);
document.write("hello world");

let d = document.getElementById("canvas");
let lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal ){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal );
  lienzo.stroke();
  lienzo.closePath();
}

dibujarLin;
console.log(misuma);
ea("green", 10, 300, 220, 10);

let arreglo = ['mariana'];
for (i=0; i<arreglo.length; i++){
console.log(arreglo[i]);
}

let prueba = {
  nombre:'oscar',
  apellido: 'lopez',
 };

delete prueba.nombre;
console.log(prueba);
document.write(prueba);


/// las funciones son bloques de codigo reutilizables

//function sumar (a,b){
  //if (a>b){
  //return (a+b);
  //}
   //return b;
//}

function sumar (a,b){
  return{
    a: a+1,
    b: b+1
  }
}


let misuma = sumar(8,9);
console.log(misuma);

let suma = function (a,b){ /// esto es una funcoin con parametros
  return a + b ;
}

let resul = suma (5,4);
console.log(resul);

otra forma de elaborar una funcion directamente es

let suma (a,b) => (a+b);

let misuma = suma(5,4);
console.log(misuma);





let cuadrado = function (a){
  if (typeof a == 'number'){
    return a * a
  }
}

let micuadradado = cuadrado(5)
console.log(micuadradado);


let cuadrado = (a) => {
  if (typeof a == 'number'){
    return a * a
  }
}

let miCuadradado = cuadrado (7)
console.log(miCuadradado);


let cuadrado = (a) =>(typeof =='number') ? a*a :
undefined;
let miCuadradado = cuadrado(4)
console.log(miCuadradado);


let myObj = (a,b) =>({a,b});
let myObjdes = myObj ("HOLA", "OSCAR");
console.log(myObjdes   );**/

// parametros y argumentos
/**cada debe ser igual a cada argumento

function sumarTodos(...todo){
return todo.reduce((a,b)=> a+b);

}

console.log(sumarTodos(1,2,3,4,5,6,7,8,9));


let misaludo;
function hello(){

  misaludo = 'oscar';

}
hello();


///////////////////////////////////////////
//clase -> es una plantilla atraves de la cual se crean objetos
//instancia -> es cada objeto creado a partir de una clase
//constructor -> funcion que se ejecuta automaticamente al
// instanciaar una clase
//propiedad -> son valores
// metodos-> funciones

let date = new Date();
console.log(date);
**/
