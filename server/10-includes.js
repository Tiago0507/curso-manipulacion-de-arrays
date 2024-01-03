const pets = ['cat', 'dog', 'bat']

// Manera de probar si un elemento de un array se encuentra dentro del array usando for
let includeInArray = false
for(let i = 0; i < pets.length; i++) {
    if(pets[i] === 'dog') {
        includeInArray = true
        break
    }
}

console.log('for', includeInArray)


// Forma de probar si el elemento de un array se encuentra dentro del array usando includes. A diferencia de otros métodos vistos,
// este método recibe directamente lo que se está buscando por parámetro y no una arrow function. Este método funciona también
// usando strings, es decir, si queremos saber si determinada letra está en un string, podemos usar este método también.
const rta = pets.includes('dog')
//const pruebita = 'dog'.includes(pets)

const rta2 = 'Santiago'.includes('i')
// console.log('pruebita', pruebita)
console.log('String', rta2)
console.log('includes', rta)