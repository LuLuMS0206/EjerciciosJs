//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// agregue 'Meat' al principio de su carrito de compras si aún no se ha agregado

if (!shoppingCart.includes('Meat')) {
    shoppingCart.push('Meat');
    shoppingCart.reverse(); // para invertir el orden de los elementos
}

console.log(shoppingCart);

// // agregue Sugar al final de su carrito de compras si aún no se ha agregado

shoppingCart.push('Sugar')
console.log(shoppingCart)

// elimine 'Miel' si es alérgico a la miel

shoppingCart.pop() 
console.log(shoppingCart) 


// modificar té a 'té verde'

shoppingCart[2] = 'Green Tea'  

console.log(shoppingCart) 

//6

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)