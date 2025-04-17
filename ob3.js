const aluno ={
    nome: "Marcos",
    nota: [12, 13, 13,]
 }

function calcularMedia (){
 let sum = 0; 
  for (let i = 0; i < aluno["nota"].length; i++) {
    sum += aluno[i];
 }
}
console.log(calcularMedia)