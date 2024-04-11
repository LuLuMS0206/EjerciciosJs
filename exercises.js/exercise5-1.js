//1
let miMatriz = [];

//2
let places = ["Bali", "Punta cana", "Paris", "Riviera Maya", "Venecia", "Islas griegas"];

//3

let longitud = 0;

for (let i = 0; i < places.length; i++) {
    longitud++;
}

console.log("La longitud de la matriz es:", longitud);

//4 
// Obtengo el primer elemento
let primerElemento = places[0];

// Obtengo el elemento intermedio 
let elementoIntermedio = places[Math.floor(places.length / 2)];

// Obtengo el último elemento
let ultimoElemento = places[places.length - 1];

console.log("Primer elemento:", primerElemento);
console.log("Elemento intermedio:", elementoIntermedio);
console.log("Último elemento:", ultimoElemento);