
/*
var jugadores_de_boca = []

function nombreMayor(nombre){
    let separar = nombre.slice(1);
    let primeraMayor = nombre[0].toUpperCase();
    let unido = primeraMayor + separar;
    let agregar = jugadores_de_boca.push(unido);
    return jugadores_de_boca;
} 

console.log(jugadores_de_boca); */


var string = "bancamento";
var letras = string.split('');
var sinA = letras.filter(letra => letra != 'a');
var sinB = sinA.filter(letra => letra != 'b');
var sinC = sinB.filter(letra => letra != 'c');
var stringCondicionado = sinC.join('');
console.log(stringCondicionado);

var suma = [];