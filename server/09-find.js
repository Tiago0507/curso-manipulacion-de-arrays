const numbers = [1, 30, 49, 29, 10, 13]

// Forma de hallar un elemento y devolver ese único elemento usando un for
let rta = undefined
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] === 30){
        rta = numbers[i]
        break
    }
}

console.log('for', rta)

// Forma de hallar un elemento y retornarlo usando find
const rta2 = numbers.find(item => item === 30)

console.log('find', rta2)

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];

// Uso de find con objetos. Este método retorna el objeto completo que tenga por id igual a hamburguesa
const rta3 = products.find(item => item.id === '🍔')

console.log('rta3', rta3)

// Similar a find, con la diferencia de que en lugar de devolver el objeto, devuelve el índice o posición en la que se encuentra
const rta4 = products.findIndex(item => item.id === '🍔')

console.log('findIndex', rta4)