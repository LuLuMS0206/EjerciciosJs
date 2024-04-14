
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
//1


for (let i = 0; i <= 10; i++) {
    console.log(countries[i]);
}

//4
for (let i = 1; i <= 7; i++) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
        linea += '#';
    }
    console.log(linea);
}


//5
for (let i = 0; i <= 10; i++) {
    console.log(i + " x " + i + " = " + (i * i));
}
