import { actualizar } from "./funciones.js";
const btn_add = document.getElementsByClassName("btn-add")[0];
const tasks = document.getElementById("tasks");
const contador = document.getElementById("contador");
let arr = [];
let pos;

if (JSON.parse(localStorage.getItem("arr"))) {
    arr = JSON.parse(localStorage.getItem("arr"));
}

actualizar(arr, tasks, pos, contador);
document.getElementsByClassName("container")[0].style = "";

document
    .getElementById("formulario")
    .addEventListener("submit", function (event) {
        event.preventDefault();
    });

const agregar = document.getElementById("agregar")
btn_add.addEventListener("click", () => {
    let value = agregar.value.trim();
    if (value != "") {
        arr.push(value);
        agregar.value = "";
        console.log(arr);
        actualizar(arr, tasks, pos, contador);
    }
});
