
const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const h1 = document.querySelector('h1');
const resultado = document.querySelector('#resultado');

//Como escuchamos los eventos
/*
onClick se usa para escuchar un evento luego de hacer click en un boton
onchange se una para escuchar un evento luego de meter datos en el input y salirse de la caja de texto
*/

function btnOnClick() {
    //Asi imprimimos el valor en tipo texto asi que se concatenara el valor que imprimimos
    //console.log(calculo1.value + calculo2.value);
    //para poder hacer bien la suma hay que parsear el valos del input que viene en tipo texto
    //podemos usar parseInt(calculo1.value) o tambien  Number(calculo1.value)
    console.log(parseInt(calculo1.value) + parseInt(calculo2.value));

    const sumaInputs = Number(calculo1.value) + Number(calculo2.value)
    resultado.innerText = "Resultado: " +sumaInputs;
    
   
}


