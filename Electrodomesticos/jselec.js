let link=document.createElement("a")

function cancelar(){
    window.location.href='Electrodomesticos.html'
}
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

function filtrarPor(filtro){
    let producto=document.querySelectorAll('.producto')
    for (let i=0;i<producto.length;i++){
        let marca=producto[i].dataset.marca
        if(marca===filtro||marca==='marca'){
            producto[i].style.display='flex'
        }else{
            producto[i].style.display='none'
        }
        
    }

}





