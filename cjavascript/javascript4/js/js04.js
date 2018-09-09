// en O mientras una de las dos sea verdaderas
// se cumple la condion
/**
if (5==3 || 4<8){
    console.log('si se cumple la condion')
}else {
  console.log('no se cumple la condicion')
}


/// mientras en Y ambas tienen que ser verdaderas
// para que se cumpla la condicion

if (5==5 && 5<10) {
  console.log('se cumplio')
}else {
  console.log('no se cumplio');
}

// if anidados

let edad = 5;

if (edad <12){
  console.log('eres un niño')
  if (edad <8){
    console.log('eres un bebe ')
  }
}
else if (edad >=12 && edad <18){
  console.log('eres un adolecente')
}
else if (edad >18 && edad <50) {
  console.log('eres un adulto')
}
else {
  console.log('eres un anciano')
}

/// condicional switch

let dias = prompt('escoge un dias:');

switch (dias) {
  case '1':
    console.log('es  lunes')
    break;
  case '2':
    console.log('es martes')
    break;
  case '3':
    console.log('es miercoles')
    break;
  case '4':
    console.log('es jueves')
    break;
  default:
  break;

}**/

let nombre = prompt('escribe tu nombre');
// la propiedad length indica la cantidad de
//caracteres  de una palabra
if (nombre.length > 6 ){
console.log('tu nombre es largo')
}
else  {
  console.log('tu nombre es corto')
}
