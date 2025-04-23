var numero = 2
function éPrimo(numero) {
    if (numero <= 1) {
      return false; // Números menores ou iguais a 1 não são primos
    }
    if (numero <= 3) {
      return true; // 2 e 3 são primos
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
      return false; // Números divisíveis por 2 ou 3 não são primos (exceto 2 e 3)
    }
    for (let i = 5; i * i <= numero; i += 6) {
      if (numero % i === 0 || numero % (i + 2) === 0) {
        return false; // Se o número for divisível por qualquer número de 5 em diante, não é primo
      }
    }
    return true; // Se nenhum divisor for encontrado, o número é primo
  }
  console.log(éPrimo(numero))