/*1. Gere um número aleatório entre 10 e 100 */

/*let num = "1"

while(num <= 5){
    console.log(num)
    num++
}
    */

function numerosAleatorios(a, b){
    return (Math.random() * (b - a +1)) + a
}
console.log(numerosAleatorios(10, 100))