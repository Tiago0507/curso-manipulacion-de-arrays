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

console.log('original', orders)
// Forma de usar map para hacer filtros. En este caso, solo se trabajará con el total
const rta = orders.map(item => item.total)
console.log('rta', rta)

// Se usa map para agregar un nuevo atributo a los objetos, en este caso un tax que tendrán todos los objetos igual a .19
// const rta2 = orders.map(item => {
//     item.tax = .19
//     return item
// })

/*Al imprimir las lineas de código se puede ver que tanto el array original como la copia con el nuevo atributo se han modificado.
Se supone que map es inmutable, sin embargo, como el array es de objetos, sabemos que los objetos trabajan por paso de referencia,
lo que quiere decir que de todas maneras se cambiará el array original, pues se está accediendo a la misma referencia en memoria. */
// console.log('rta2', rta2)
// console.log('original', orders)

/*Para evitar que se cambie el array original, se usa el spread operator (...) con el item, lo que hace esto es copiar todos los 
atributos de un objeto pero en otro diferente, y después se agrega el nuevo tax de .19 */
const rta3 = orders.map(item => {
    return {
        ...item,
        tax: .19
    }
})

console.log('rta3', rta3)
console.log('original', orders)