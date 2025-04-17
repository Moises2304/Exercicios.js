/*5. Use .find() para encontrar um número específico dentro de um array */

const number = [9, 0, 5, 8, 3, 8, 12]
const locailizar = number.findIndex(num => num < 4);

console.log(locailizar)