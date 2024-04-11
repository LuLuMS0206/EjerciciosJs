//10
// function verificarLongitudNombre(Alejandro) {
//     if (Alejandro.length > 7) {
//         return "Su nombre es largo.";
//     } else {
//         return "Su nombre es corto.";
//     }
// }

// var nombreUsuario = "Alejandro";

// console.log(verificarLongitudNombre(nombreUsuario));

//11

function verificarLongitudNombre(primerNombre, apellido) {
    if (primerNombre.length > apellido.length) {
        return "Tu primer nombre, " + primerNombre + ", es más largo que tu apellido, " + apellido + ".";
    } else {
        return "Tu apellido, " + apellido + ", es más largo que tu primer nombre, " + primerNombre + ".";
    }
}

// Ejemplo de uso
var primerNombreUsuario = "Lucia";
var apellidoUsuario = "Sanchez";

console.log(verificarLongitudNombre(primerNombreUsuario, apellidoUsuario)); // Imprime "Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh."
