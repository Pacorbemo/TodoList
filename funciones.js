function pintarCantidad(arr, contador) {
    let no_tasks = document.getElementById("no-tasks");
    if (Object.keys(arr).length == 0) {
        no_tasks.style = "";
    } else {
        no_tasks.style = "display: none";
    }
    contador.innerHTML = Object.keys(arr).length;
}

function agregarFila(arr, task, pos, tasks) {
    const nuevoLi = document.createElement("li");
    const nuevoP = document.createElement("p");
    const botonBorrar = document.createElement("button");

    botonBorrar.innerHTML = "X";
    botonBorrar.classList.add("btn-delete");
    botonBorrar.addEventListener("click", () => {
        arr.splice(pos, 1);
        actualizar(arr, tasks, pos, contador);
    });
    nuevoP.textContent = task;
    nuevoLi.appendChild(nuevoP);
    nuevoLi.appendChild(botonBorrar);
    tasks.appendChild(nuevoLi);
}

function agregarTodo(arr, tasks, pos) {
    while (tasks.childElementCount > 0) {
        tasks.removeChild(tasks.lastChild);
    }
    pos = 0;
    arr.forEach((task) => {
        agregarFila(arr, task, pos, tasks);
        pos++;
    });
}

function subirInfo(arr) {
    localStorage.setItem("arr", JSON.stringify(arr));
}

export function actualizar(arr, tasks, pos, contador) {
    pintarCantidad(arr, contador);
    agregarTodo(arr, tasks, pos);
    subirInfo(arr);
}
