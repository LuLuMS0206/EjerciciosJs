//1
let challenge = '30 Days Of JavaScript';

//2
console.log(challenge);
//3
console.log(challenge.length)

//4
challenge = challenge.toUpperCase();
//5
challenge = challenge.toLowerCase();

//8
if (challenge.includes('Script')) {
    console.log('La cadena contiene la palabra "Script".');
} else {
    console.log('La cadena no contiene la palabra "Script".');
}

//9
let array = challenge.split(' ');
console.log(array);

//15
let position = challenge.indexOf('a');
console.log("La primera aparición de 'a' está en la posición:", position);
//16
let lastPosition = challenge.lastIndexOf('a');
console.log("La última aparición de 'a' está en la posición:", lastPosition);

//20
challenge = challenge.trim();
console.log(challenge);

//21
let startsWithThirty = challenge.startsWith('30');
console.log(startsWithThirty);

//22
let endsWithJavaScript = challenge.endsWith('30 Days Of JavaScript');
console.log(endsWithJavaScript);

//23
let matches = challenge.match(/a/g);
console.log(matches);

//24
let firstPart = '30 días de';
let secondPart = ' JavaScript';

let combinedString = firstPart.concat(secondPart);

console.log(combinedString);

//25
let repeatedString = challenge.repeat(2);

console.log(repeatedString);