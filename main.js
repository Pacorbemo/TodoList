const btn_add = document.getElementsByClassName("btn-add")[0];
const tasks = document.getElementById("tasks");
const contador = document.getElementById("contador");
let arr = [];
if (JSON.parse(localStorage.getItem("arr"))) {
    arr = JSON.parse(localStorage.getItem("arr"));
}

function pintarCantidad() {
    let no_tasks = document.getElementById("no-tasks");
    if (Object.keys(arr).length == 0) {
        no_tasks.style = "";
    } else {
        no_tasks.style = "display: none";
    }
    contador.innerHTML = Object.keys(arr).length;
}

function agregarFila(task, posicion) {
    const nuevoLi = document.createElement("li");
    const nuevoP = document.createElement("p");
    const botonBorrar = document.createElement("button");

    botonBorrar.innerHTML = "X";
    botonBorrar.classList.add("btn-delete");
    botonBorrar.addEventListener("click", () => {
        arr.splice(posicion, 1);
        actualizar();
    });
    nuevoP.textContent = task;
    nuevoLi.appendChild(nuevoP);
    nuevoLi.appendChild(botonBorrar);
    tasks.appendChild(nuevoLi);
    pos++;
}

let pos;
function agregarTodo() {
    while (tasks.childElementCount > 0) {
        tasks.removeChild(tasks.lastChild);
    }
    pos = 0;
    arr.forEach((task) => {
        agregarFila(task, pos);
    });
}

function subirInfo() {
    localStorage.setItem("arr", JSON.stringify(arr));
}

function actualizar() {
    pintarCantidad();
    agregarTodo();
    subirInfo();
}

actualizar();
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
        actualizar();
    }
});
