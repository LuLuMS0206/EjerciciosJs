//1
function generarIdentification(longitud) {
    const caracteres = 'ACDRSTUpqrstuvwxyz01789';
    let identification = '';

    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        identification += caracteres[indiceAleatorio];
    }

    console.log(identification);
}

generarIdentification(8);

//4
const paises = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
const paisesMinusculas = [];

for (let i = 0; i < paises.length; i++) {
    paisesMinusculas.push(paises[i].toLocaleLowerCase());
}

console.log(paisesMinusculas);

//5
const longitudesPaises = [];

for (let i = 0; i < paises.length; i++) {
    longitudesPaises.push(paises[i].length);
}

console.log(longitudesPaises);

//8

const paisesIa = ['Albania', 'Bolivia','Ethiopia']

let terminanEnIA = false;

for (let i = 0; i < paisesIa.length; i++){
    if (paisesIa[i].includes("ia")) {
        terminanEnIA = true;
console.log( 'Estos países terminan en ia', paisesIa)
    }
    else{
        console.log( 'Estos son países que terminan sin ia')
    }
}


//15
const frutas = ['banana', 'orange', 'mango', 'lemon'];
const frutasInvertidas = [];

for (let i = frutas.length - 1; i >= 0; i--) {
    frutasInvertidas.push(frutas[i]);
}

console.log(frutasInvertidas);
