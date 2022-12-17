/* Primera parte uso de addEventListener('click'

const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const h1 = document.querySelector('h1');
const resultado = document.querySelector('#resultado');

//Escuchar un evento = addEventListener('click' => Quiere decir que al hacer click ejecutara la funcion que mandammos a llamar)
btnCalcular.addEventListener('click',btnOnClick);

function btnOnClick() {
   
    console.log(Number(calculo1.value) + Number(calculo2.value));

    const sumaInputs = Number(calculo1.value) + Number(calculo2.value)
    resultado.innerText = "Resultado: " +sumaInputs;
    
}
*/
/* Segunda Parte usamos de una manera el submit y despues enviamos una funcion 
const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const h1 = document.querySelector('h1');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

//Submit es un evento para formularios por defecto 
//Si al escuchar un evento ponemos los parentesis referenciando la funcion quiere decir que luego de el submit ocurra tal cosa
formulario.addEventListener('submit',sumarInputsValues());

function sumarInputsValues() {
   
    console.log(Number(calculo1.value) + Number(calculo2.value));

    const sumaInputs = Number(calculo1.value) + Number(calculo2.value)
    resultado.innerText = "Resultado: " +sumaInputs;
    
}
*/

/* Tercera Forma es usando preventDefault*/

const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const h1 = document.querySelector('h1');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');


formulario.addEventListener('submit',sumarInputsValues);

function sumarInputsValues(evento) {
    evento.preventDefault();
    console.log(Number(calculo1.value) + Number(calculo2.value));
    const sumaInputs = Number(calculo1.value) + Number(calculo2.value)
    resultado.innerText = "Resultado: " +sumaInputs;
    
}

/*Tipos de eventos que existen
submit
click
mouseover
mouseout
mousemove

blur: Cuando el elemento pierde el foco.
click: El usuario hace clic sobre el elemento.
dblclick: El usuario hace doble clic sobre el elemento.
focus: El elemento gana el foco.
keydown: El usuario presiona una tecla.
keypress: El usuario presiona una tecla y la mantiene pulsada.
keyup: El usuario libera la tecla.
load: El documento termina su carga.
mousedown: El usuario presiona el botón del ratón en un elemento.
mousemove: El usuario mueve el puntero del ratón sobre un elemento.
mouseout: El usuario mueve el puntero fuera de un elemento.
mouseover: El usuario mantiene el puntero sobre un elemento.
mouseup: El usuario libera el botón pulsado del ratón sobre un elemento.
unload: El documento se descarga, bien porque se cierra la ventana, bien porque se navega a otra página.
*/
