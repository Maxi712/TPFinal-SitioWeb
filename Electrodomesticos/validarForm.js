document.getElementById('formulario').addEventListener('submit', validar)
function validar (event){
    event.preventDefault()
    const nombre = document.getElementById('nombre').value.trim();
    const gmail = document.getElementById('gmail').value.trim();
    const fono = document.getElementById('fono').value.trim();
    const calle = document.getElementById('calle').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const codigo = document.getElementById('cod').value.trim();
    const provincia = document.getElementById('pro').value.trim();
    const resultadoValidacion = document.getElementById('resultadoValidacion');
    resultadoValidacion.innerHTML=''
    let error=[]
    if (nombre===''||gmail===''||fono===''||calle===''||ciudad===''||codigo===''||provincia===''){
        error.push('No deje ningun campo vacio')
    }
    if (nombre<4&&nombre!=''){
        error.push('En nombre y apellido no estan permitido menos de 5 letras')
    }

    const letras=/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/
    if (!letras.test(nombre)&&nombre!=''){
        error.push('En nombre y apellido solo se permiten letras')
    }
    if (!letras.test(ciudad)&&ciudad!=''){
        error.push('En ciudad solo se permiten letras')
    }
    if (!letras.test(provincia)&&provincia!=''){
        error.push('En provincia solo se permiten letras')
    }
    const numeros = /^[0-9]+$/;
    if (!numeros.test(fono)&&fono!=''){
        error.push('En telefono solo se permiten numeros')
    }
    if(fono!=10&&fono!=''){
        error.push('En telefono solo se puede ingresar 10 numeros')
    }
    if (!numeros.test(codigo)&&codigo!=''){
        error.push('En codigo postal solo se permiten numeros')
    }

    const correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correo.test(gmail)&&gmail!=''){
        error.push('Correo no valido')
    }
    if(error.length > 0){
        resultadoValidacion.innerHTML=error.join('<br>')
        resultadoValidacion.style.color='red'
    }else{
        resultadoValidacion.innerHTML='Formulario valido'
        resultadoValidacion.style.color='green'
    }
    

}