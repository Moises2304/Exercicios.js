/* usar if -- else

let n = 28
if (n % 2 === 0 ){
    console.log("E par")
}else{
console.log("Nao e par ")
}

   fluxo
let n = 1;

while(n <11) {
    if (n % 2 !== 0) continue;
    console.log(n)

    n++;
}


     colocaar dados e deletar 
let person = {
    name : 'John',
    age : 25,
    powerLevel : 9002,
}

delete person.age
person.loja = "nike"

console.log(person)
 
//faz o conjonto de todos os numeros incluindo
const personalData = {
    name : "John Doe",
    age : 120,
    gender: "Male"
}

const bankDetails = {
    accountNumber: 1234567,
    BIM: "12345678876607576",
    swiftCode: "mmm132435" 
}

const employeData = {...personalData,...bankDetails, user:"Moises2304"}
console.log(employeData)
*/

/* funcoes anomnimas
 soma = function(a, b) {
 return a + b;
 }

 arrow function
*/

let a = 2
 const double = (a) => 2 * a
 
 console.log(double(5))