const elements = [1, 1, 2, 2]
const othersElements = [3, 3, 4, 4]

// Forma de concatenar dos arrays usando un for
const newArray = [...elements]
for(let i = 0; i < othersElements.length; i++){
    const element = othersElements[i]
    newArray.push(element)
}
console.log(newArray)
/* Forma de concatenar dos arrays usando concat. Este método es inmutable, así que crea una copia del array nuevo con ambas
concatenaciones*/
const rta = elements.concat(othersElements)
console.log('concat', rta)

/* Otra posible forma de concatenar dos arrays usando spread operator*/
const rta2 = [...elements, ...othersElements]
console.log('...', rta2)

/* En este caso, añade a random pero dividido en caracteres*/
const rta3 = [...elements, ...'random']
console.log('rta3', rta3)

/* Forma de concatenar los elementos dentro del array original, sin hacer una copia. Como queremos los elementos y no el array
completo, usamos spread operator para solo obtener los elementos*/
elements.push(...othersElements)
console.log(elements)