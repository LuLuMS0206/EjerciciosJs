//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// de menor a mayor
ages.sort((a, b) => a - b);

//edad mínima 
const edadMinima = ages[0];

//edad máxima 
const edadMaxima = ages[ages.length - 1];

console.log("Matriz de edades ordenada:", ages);
console.log("Edad mínima:", edadMinima);
console.log("Edad máxima:", edadMaxima);

//2
let mediana;

if (ages.length % 2 === 0) {
    // Si la longitud de la matriz es par
    const medioSuperior = ages.length / 2;
    const medioInferior = medioSuperior - 1;
    mediana = (ages[medioInferior] + ages[medioSuperior]) / 2;
} else {
    // Si la longitud de la matriz es impar
    const indiceMediana = Math.floor(ages.length / 2);
    mediana = ages[indiceMediana];
}

console.log("Mediana de edades:", mediana);

//3

// Sumar todas las edades
const sumaEdades = ages.reduce((total, edad) => total + edad, 0);

// Calcular el promedio dividiendo la suma total por el número de edades
const promedioEdades = sumaEdades / ages.length;

console.log("Edad promedio:", promedioEdades);

//4


// Encontrar la edad mínima 
const encontrarEdadMinima = Math.min(...ages);

// Encontrar la edad máxima 
const encontraEdadMaxima = Math.max(...ages);

// Calcular el rango de edades (edad máxima - edad mínima)
const rangoEdades = encontraEdadMaxima - encontrarEdadMinima;

console.log("Rango de edades:", rangoEdades);
