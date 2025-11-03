let link=document.createElement("a")


function comprar(img,desc,marca,pre){
    localStorage.setItem("proselec", img)
    localStorage.setItem("descselec", desc)
    localStorage.setItem("marcaselec", marca)
    localStorage.setItem("preselec", pre)
    window.location.href="Comprare.html"
}
//aqui es donde voy a cargar la imagen del formulario
    window.addEventListener('DOMContentLoaded',()=>{
    let imagen=localStorage.getItem('proselec')
    let descripcion=localStorage.getItem('descselec')
    let marca=localStorage.getItem('marcaselec')
    let precio=localStorage.getItem('preselec')
    
    if(imagen){
        document.getElementById('ima').src=imagen
    }
    if(descripcion){
        document.getElementById('desc').textContent=descripcion
    }
    if(marca){
        document.getElementById('mar').textContent='Marca:'+marca
    }
    if(precio){
        document.getElementById('pre').textContent='Precio:'+precio
    }
})





