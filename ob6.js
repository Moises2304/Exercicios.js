const objeto = {

};
console.log(objeto)
const usuarios = ["Luca Modic", "Domink Livakovic", "Ivan Perisic", "Luca Sucic", "Mario Pasalic" ];

usuarios.forEach((usuarios,index) => objeto[`id_${index}`]= usuarios);
console.log(objeto)