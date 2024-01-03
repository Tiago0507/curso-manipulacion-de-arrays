const numbers = [1, 2, 3, 4, 5, 6]

/* Forma de partir un array entre dos números, uno de inicio y otro de final, usando un for*/
const newArray = []
const sliceWithFor = (start, end) => {
    for(let i = start; i < end; i++){
        newArray.push(numbers[i])
    }
    return newArray
}

const rta = sliceWithFor(1, 4)
console.log('for', rta)

/* Forma de partir un array entre dos números, usando slice. Si no se le da los parámetros de inicio y fin, slice devuelve una copia
completa del array. Si no se le especifica el inicio o el final, tomará desde el inicio y hasta el final el array original. Es un
método inmutable, por lo que no cambia el array original*/
const rta2 = numbers.slice(1, 4)
console.log('slice', rta2)

/* Slice también sirve para partir strings*/
const name = 'Santiago'
const rta3 = name.slice(0, 5)

console.log('sliceWithString', rta3)