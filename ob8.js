/*8. Crie uma função que mescle dois objetos e retorne um novo objeto com todas
as propriedades. */

let atividades = { Matabicho:"matabicho, almocho, jantar", Lancha: "bola, doces, salgados",}
let frutos = { Sobrimensa:"banana, laranja, melacia"}

let dia_a_dia = {...atividades, ...frutos}

console.log(dia_a_dia)