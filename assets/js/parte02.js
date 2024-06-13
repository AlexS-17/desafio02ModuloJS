// Segunda parte del desafío - Stickers

function validarStickers() {
    // Obtener los valores de los inputs
    const stickers01 = parseInt(document.querySelector('#sticker1').value) || 0;
    const stickers02 = parseInt(document.querySelector('#sticker2').value) || 0;
    const stickers03 = parseInt(document.querySelector('#sticker3').value) || 0;

    // Calcular la suma total de stickers
    const totalStickers = stickers01 + stickers02 + stickers03;

    // Obtener el elemento donde se mostrará el resultado
    const resultadoSumaStickers = document.querySelector('#totalStickers');

    // Verificar la cantidad de stickers y mostrar el mensaje correspondiente
    if (totalStickers > 10) {
        resultadoSumaStickers.innerHTML = `¡muchos stickers! (${totalStickers})`;
        resultadoSumaStickers.style.color = 'red';
    } else {
        resultadoSumaStickers.innerHTML = `${totalStickers} stickers`;
        resultadoSumaStickers.style.color = 'green';
    }
}