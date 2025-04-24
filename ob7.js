/*7. Utilize JSON.stringify() e JSON.parse() para converter um objeto em string e viceversa */

const jogadores = [
    {
        "nome": Leonel,
        "sobrenome": Messi,
        "estado_sivil": Casado
    },
    {
        "nome": Cristiano,
        "sobrenome": Ronaldo,
        "estado_civil": Casado
    },
    {
        "nome": Sergio,
        "sobrenome": Ramos,
        "estado_sivil": Casado
    }
]
var string = jogadores

console.log(JSON.parse(string))