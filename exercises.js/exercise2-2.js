//1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another")


//2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")


//3
if (typeof parseInt('10') === 'number' && parseInt('10') === 10) {
    console.log("typeof '10' es exactamente igual a 10.");
} else {
    console.log("typeof '10' no es exactamente igual a 10.");
}

//4
let number = parseFloat('9.8');
if (number === 10) {
    console.log("parseFloat('9.8') es igual a 10.");
} else {
    number = 10;
    console.log("parseFloat('9.8') no es igual a 10, ahora es exactamente igual a 10.");
}


//7
let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);

//8
let randomNumbe = Math.floor(Math.random() * (101 - 50) + 50);  
console.log(randomNumbe);

//9
let numberRandom = Math.floor(Math.random() * 256);
console.log(numberRandom);

//11
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
