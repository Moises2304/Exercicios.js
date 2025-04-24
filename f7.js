/*7. Crie uma função que recebe um nome e um sobrenome e retorna um objeto {
nome, sobrenome, nomeCompleto }.
 */

const nomes = {
    nome: "leonel",
    sobrenome: "Messi"
}
function nomeCompleto(){
    console.log( (`O melhor jogador do mundo  é o ${nomes.nome} ${nomes.sobrenome}`))
}

nomeCompleto()