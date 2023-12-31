const words = ['spray', 'limit', 'elite', 'exuberant']

// Forma de filtrar un array usando un for
const newArray = []
for(let i = 0; i < words.length; i++){
    const element = words[i]
    if(element.length >= 6){
        newArray.push(element)
    }
}
console.log('NewArray', newArray)
console.log('Original', words)

// Forma de filtrar usando filter
const rta = words.filter(item => item.length >= 6)
console.log('rta', rta)
console.log('Original', words)

const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true
    },
]

const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3)
console.log('Original', orders)

/* Se ponen dos return, el primero devuelve un booleano que dirá si se cumple o no la condición del filtro, en este caso la condición
es que cumpla con el query que será el string que deben tener los elementos del array. Posteriormente, el otro return devuelve el
nuevo array de los elementos que cumplen con la condición del filter*/
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}

console.log(search('Nico'))