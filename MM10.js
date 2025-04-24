/**10.Gere um número aleatório entre 1 e 6, simulando o lançamento de um dado. */
function lancarUmDado (){
  let numAleatorio = Math.floor(Math.random() * 6);
  return numAleatorio + 1;
}


let resultado = lancarUmDado();
console.log(`o resultado do lancamento do dado e ${resultado}`)