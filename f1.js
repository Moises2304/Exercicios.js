
/*
1. Crie uma função nomeada que receba um array de números e retorne a soma
de todos os elementos.*/


function mediaDeArray(array){
    let sum = 0; 
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    } 
    return sum;
}


let result = (mediaDeArray([12, 12, 8]))
console.log(result);
