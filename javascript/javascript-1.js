let arra = [1,2,3,4,'oscar',5,6,7,8,9,];
let suma = 0;
for (i = 0; i<arra.length; i++){
  let element = arra[i];
  if (typeof element == 'number'){
    suma += element;
  }
}
 console.log(suma);
