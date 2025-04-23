/*5. Implemente uma função que recebe um número e retorna uma função que
adiciona esse número a outro número passado posteriormente.
 */

function criarSomador(numero) {
    return function(outroNumero) {
      return numero + outroNumero;
    };
  }
  
  const somadorDeCinco = criarSomador(5);
  console.log(somadorDeCinco(3)); 
  console.log(somadorDeCinco(10)); 