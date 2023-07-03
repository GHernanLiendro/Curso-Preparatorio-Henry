// Bucle For

// Por un lado, el Bucle For es utilizado cuando sabemos con antelación la cantidad máxima exacta de pasos
// que queremos ejecutar. Esta cantidad máxima de pasos se sitúa como segundo parámetro entre los paréntesis.

for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma);

// Bucle while

// El Bucle While es usado cuando no tenemos la certeza de cuántos pasos vamos a necesitar hasta finalizar 
// la ejecución. Por ejemplo, podríamos pensar en una función que siga agregando +1 
// hasta llegar a un número determinado.

while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
    };

    