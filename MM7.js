/*7. Gere um número aleatório entre dois valores definidos. */
function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const numeroAleatorio = gerarNumeroAleatorio(0, 26);
console.log(numeroAleatorio)