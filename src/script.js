// script.js

// Función para agregar una nueva habilidad
function agregarHabilidad() {
    const habilidadInput = document.getElementById("nueva-habilidad");
    const habilidad = habilidadInput.value.trim();

    if (habilidad !== "") {
        // Crear el nuevo elemento de la lista
        const nuevaHabilidad = document.createElement("li");

        // Crear el texto para la habilidad
        nuevaHabilidad.textContent = habilidad;

        // Crear el botón de eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar-boton");
        
        // Función que eliminará la habilidad al hacer clic en el botón
        botonEliminar.onclick = function() {
            nuevaHabilidad.remove();
            eliminarHabilidadDelStorage(habilidad);
        };

        // Añadir el botón al elemento de la habilidad
        nuevaHabilidad.appendChild(botonEliminar);

        // Agregar la habilidad a la lista
        const listaHabilidades = document.getElementById("lista-habilidades");
        listaHabilidades.appendChild(nuevaHabilidad);

        // Guardar la habilidad en el localStorage
        guardarHabilidadEnStorage(habilidad);

        // Limpiar el campo de entrada
        habilidadInput.value = "";
    } else {
        alert("Por favor, ingresa una habilidad.");
    }
}

// Guardar la habilidad en el localStorage
function guardarHabilidadEnStorage(habilidad) {
    let habilidades = JSON.parse(localStorage.getItem("habilidades")) || [];
    habilidades.push(habilidad);
    localStorage.setItem("habilidades", JSON.stringify(habilidades));
}

// Eliminar la habilidad del localStorage
function eliminarHabilidadDelStorage(habilidad) {
    let habilidades = JSON.parse(localStorage.getItem("habilidades")) || [];
    habilidades = habilidades.filter(h => h !== habilidad);
    localStorage.setItem("habilidades", JSON.stringify(habilidades));
}

// Cargar habilidades desde el localStorage en la página de inicio
function cargarHabilidadesDesdeStorage() {
    const habilidades = JSON.parse(localStorage.getItem("habilidades")) || [];
    const listaHabilidades = document.getElementById("habilidades-lista");

    habilidades.forEach(habilidad => {
        const li = document.createElement("li");
        li.textContent = habilidad;
        listaHabilidades.appendChild(li);
    });
}

// Ejecutar la carga de habilidades cuando la página de inicio se carga
if (document.getElementById("habilidades-lista")) {
    cargarHabilidadesDesdeStorage();
}
