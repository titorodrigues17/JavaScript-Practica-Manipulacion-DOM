/*
Que es el DOM? (Document Object Model. por sus siglas en inglés)
El DOM es una representación del documento HTML como un grupo de
 nodos y objetos. Determinando así la forma en la cual se puede 
 acceder y modificar la estructura, contenido y estilo de un documento
  HTML. En palabras mas sencillas el DOM le dice a un programa como 
  JavaScript que nodo o parte del HTML esta leyendo (como puede ser
  un párrafo o un titulo o una sección, etc.) y es el mismo DOM 
  el que modela como un objeto (con sus propiedades y métodos) 
  esa parte del documento. Con JS se accede a esas propiedades 
  y se invoca esos métodos para modificar, eliminar, crear, etc.
  elementos en una pagina web.
*/

//style
//h1{ color: red}
// .parrafito{ ... }
// #pid{ ... }
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1); // Me imprime mi h1 y me permite ver donde esta seleccionado

//Si imprimimos esto en un objeto nos muestra las propiedades permitidas de nuestro navegador
// a ese h1 y demas opciones 
console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

console.log(input.value); // Me permite ver el valor del value del input lo que llegue a poner el usuario

//innerHTML nos permite modificar elementos de un html
h1.innerHTML = 'patito <br> Feo';

//h1.innerText este convierte todo en texto 
/* 
console.log(h1.getAttribute('class')); //Nos muestra los atributos de una etiqueta en html
h1.setAttribute('class','rojo') //modificar los atributos de una etiqueta en html
*/

h1.classList.add('verde'); //Nos agrega un clase desde javascript
h1.classList.remove('rojo'); //Nos eliminarala clase que se llame asi 
/*
h1.classList.toggle('verde'); 
h1.classList.contains('verde'); 
*/

input.value = "1234"
//nos crea elementos en html
//console.log(document.createElement('img')); 

const img = document.createElement('img'); 
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQY2hGqTGY8ETNJ-i_xPzrq_ASbVfIBCCvA&usqp=CAU');
console.log(img);

//inserta sobre la propiedad 
pid.append(img); // or pid.appendChild(img);



