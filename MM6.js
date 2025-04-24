/*6. Converta um ângulo de graus para radianos e vice-versa usando Math.PI. */

function graus_Padianos(graus){
    return graus * Math.PI / 180;
}

let graus = 90
let radianos = graus_Padianos(graus);
 console.log(`${graus} graus = ${radianos} radianos`)


 function radianos_Graus (rad){
    return rad * Math.PI / 180; 
 }

 graus = radianos_Graus(Math.PI / 2);
 console.log(`${Math.PI / 2} radianos = ${graus} graus`)