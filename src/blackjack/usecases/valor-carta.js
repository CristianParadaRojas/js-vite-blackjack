/**
 * Esta funcion indica el valor numerico de la carta
 * @param {String} carta Recibe una carta Ejemplo '2H'
 * @returns retorna el valor numerico de la carta Ejemplo A -> 11
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}