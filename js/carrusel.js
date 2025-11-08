const imagenes = [
    'imgcar/heladerap.webp',
    'imgcar/ps5.webp',
    'imgcar/escri.webp',
    'imgcar/micro.webp'

];
let indiceActual = 0;
const imagenElemento = document.getElementById('imagenCarrusel');
const totalImagenes = imagenes.length;
function actualizarImagen() {
    imagenElemento.src = imagenes[indiceActual];
    imagenElemento.onclick=()=>window.open('Electrodomesticos/comprare.html')
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
