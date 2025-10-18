function validarFormulario(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const resultadoDiv = document.getElementById('resultadoValidacion');
    resultadoDiv.innerHTML = '';
    let errores = [];
    if (nombre === "") {
        errores.push("Falta completar el campo del nombre.");
    } else if (nombre.lenght > 50) {
        errores.push("El nombre no debe excederse de 50 caracteres.");
    }
    if (mensaje === "") {
        errores.push("Falta completar el campo del mensaje.");
    }
    const regexEmail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
    if (!regexEmail.test(email)) {
        errores.push("El email no es valido.");
    }
    if (errores.length > 0) {
        const errorContainer = document.createElement('div');
        errorContainer.className = 'error-box';
        const tituloError = document.createElement('h3');
        tituloError.textContent = '¡Error en el formulario!';
        errorContainer.appendChild(tituloError);
        const listaErrores = document.createElement('ul');
        errores.forEach(error => {
            const li = document.createElement('li');
            li.textContent = error;
            listaErrores.appendChild(li);
        });
        errorContainer.appendChild(listaErrores);
        resultadoDiv.appendChild(errorContainer);
        return false;
    } else {
        const mensajeExito = document.createElement('p');
        mensajeExito.className = 'seccess-message';
        mensajeExito.textContent = '¡Formulario enviado con exito!'
        resultadoDiv.appendChild(mensajeExito);
        document.getElementById('formularioContacto').reset();
        return true;
    }
}
const imagenes = [

];
let indiceActual = 0;
const imagenElemento = document.getElementById('imagenCarrusel');
const totalImagenes = imagenes.length;
function actualizarImagen() {
    imagenElemento.src = imagenes[indiceActual];
}
function siguienteImagen() {
    indiceActual = (indiceActual + 1) % totalImagenes;
    actualizarImagen();
}
function anteriorImagen() {
    indiceActual = (indiceActual - 1 + totalImagenes) % totalImagenes;
    actualizarImagen();
}
document.addEventListener('DOMContentLoaded', () => {
    if (imagenElemento) {
        actualizarImagen();
    }
    const btnSiguiente = document.getElementById('btnSiguiente');
    const btnAnterior = document.getElementById('btnAnterior');
    if (btnSiguiente) {
        btnSiguiente.addEventListener('click', siguienteImagen);
    }
    if (btnAnterior) {
        btnAnterior.addEventListener('click', anteriorImagen);
    }
});
<categorias onclick="windows.open('Muebles.html', '_blank')">Muebles</categorias>