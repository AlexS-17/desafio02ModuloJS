// Parte 01 del desafío - bordear una img

function bordearImagen() {
    let imagenBordeada = document.querySelector('#imgBlackGoku');
    if ( imagenBordeada.style.border) {
        imagenBordeada.style.border = '';
    }else {
        imagenBordeada.style.border = '2px solid red'
    }
}