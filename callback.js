/*Supongamos que tenemos una función 1 que recibe por parámetro a una función 2. 
Cuando la función 1 ejecuta a la función 2 en su interior, se produce un proceso llamado “callback”. 

Los callbacks son muy útiles en el mundo de la programación, 
nos aseguran que una función no se va a ejecutar antes de que se complete una tarea, 
sino que se ejecutará justo después de que la tarea se haya completado.*/

function devuelvoUsuario() {
    return 'CAMILO';
 }
 function devuelvoSaludo() {
    return 'Hola';
 }
 function saludar(cb1, cb2) {
    return cb1() + ' ' + cb2();
 }
 var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
 console.log(resultado);


 function brindar_saludo() {
   return 'Hola amigo!';
}
function indicar_hora(){
   return 'es hora de ir a casa.';
}
function despedir(cb1,cb2) {
   return cb1() + ', '+ cb2();
}
var chau = despedir(brindar_saludo, indicar_hora);
console.log(chau);

