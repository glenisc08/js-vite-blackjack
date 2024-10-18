
/**
 * @param {String} carta 
 * @returns {HTMLElement} imagen de retorno
 */
export function crearCartaHTML(carta) {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;  
    imgCarta.classList.add('carta');  
    return imgCarta;
}
