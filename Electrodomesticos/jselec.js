let link=document.createElement("a")


function comprar(){
    
    let pro=comprar.closest(".producto")
    let img=pro.querySelector('.img')
    let imgform=document.getElementById("producto")
    localStorage.setItem("imgSrc", img.src)
    localStorage.setItem("imgAlt",img.alt)
    window.location.href="Comprare.html"
}
function p(){
    document.getElementById("producto")
    localStorage.getItem("imgSrc")
    localStorage.getItem("imgAlt")
}
