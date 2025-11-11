function validarFormulario(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono=document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const resultadoDiv = document.getElementById('resultadoValidacion');
    resultadoDiv.innerHTML = '';
    let errores = [];
    if (nombre === "") {
        errores.push("Falta completar el campo del nombre.");
    } else if (nombre.length > 50) {
        errores.push("El nombre no debe excederse de 50 caracteres.");
    }
    if (mensaje === "") {
        errores.push("Falta completar el campo del mensaje.");
    }
    const regexEmail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
    if (!regexEmail.test(email)) {
        errores.push("El email no es valido.");
    }
    const regextelefono = /^[0-9]{7,15}$/;
    if (!regextelefono.test(telefono)) {
        errores.push("El telefono no es valido.");
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
        errorContainer.appendChild(listaErrores)
        resultadoDiv.appendChild(errorContainer);
        return false;
    } else {
        const enviadoContainer=document.createElement('div')
        enviadoContainer.className='enviado-box'

        const mensajeExito = document.createElement('p');
        mensajeExito.className = 'success-message';
        mensajeExito.textContent = '¡Formulario enviado con exito!'
        enviadoContainer.appendChild(mensajeExito);
        resultadoDiv.appendChild(enviadoContainer)
        const datosContainer =document.createElement('div') 
        datosContainer.className='datos-cargados' 
        const correcto=document.createElement('p') 
        correcto.textContent= `Muy bien ${nombre}, esto son sus datos:` 
        datosContainer.appendChild(correcto)
        const listaData=document.createElement('ul')
        const itemNombre = document.createElement('li')
        itemNombre.textContent = `Nombre: ${nombre}`
        listaData.appendChild(itemNombre)
        const itemGmail = document.createElement('li')
        itemGmail.textContent = `Gmail: ${email}`
        listaData.appendChild(itemGmail)
        const itemTelefono = document.createElement('li')
        itemTelefono.textContent = `Telefono: ${telefono}`
        listaData.appendChild(itemTelefono)
        const itemMensaje = document.createElement('li')
        itemMensaje.textContent = `Mensaje: ${mensaje}`
        listaData.appendChild(itemMensaje)
        datosContainer.appendChild(listaData)
        resultadoDiv.appendChild(datosContainer)
        document.getElementById('formularioContacto').reset();
        return true;
    }
}

