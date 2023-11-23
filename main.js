import { actualizar } from "./funciones.js";

let arr = [];
let pos;

// Para evitar pasarle siempre las mismas variables a actualizar 
function actualizarInfo(){
    actualizar(arr, pos);
}

// Añadir las funcionalidades al boton de agregar
document.getElementsByClassName("btn-add")[0].addEventListener("click", () => {
    const agregar = document.getElementById("agregar");
    const value = agregar.value.trim();
    if (value) {
        arr.push(value);
        agregar.value = "";
        actualizarInfo();
    }
});
// Evitar que se envie el formulario al pulsar el boton
document.getElementById("formulario").addEventListener("submit", event => event.preventDefault());

//Descargar la informacion de localStorage
if (JSON.parse(localStorage.getItem("arr"))) {
    arr = JSON.parse(localStorage.getItem("arr"));
}

actualizarInfo()                                              // Actualizar la informacion de la pagina
document.getElementsByClassName("container")[0].style = "";   // Mostrar el container despues de actualizar la informacion