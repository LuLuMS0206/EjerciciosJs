//1
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let count = (sentence.match(/love/g).length || []);
console.log(count);

//2
let oration = 'You cannot end a sentence with because because because is a conjunction';
let countOration = (oration.match(/because/g) || []).length;
console.log(countOration);

//4
let text = "Gana 5.000 euros de salario al mes, 10.000 euros de bonificación anual y 15.000 euros de cursos en línea al mes";

// Extraer los números del texto usando una expresión regular
let numbers = text.match(/\d+\.?\d*/g);

// Convertir los números de strings a números
let incomeNumbers = numbers.map(Number);

// Sumar los números para obtener el ingreso anual total
let totalAnnualIncome = incomeNumbers.reduce((acc, curr) => acc + curr, 0);

console.log("El ingreso anual total es:", totalAnnualIncome, "euros.");