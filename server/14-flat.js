// Matriz con un solo nivel
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// Forma de aplanar una matriz en un array, usando for
const newArray = []
for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        newArray.push(matrix[i][j])
    }
}
console.log('for', newArray)

// Forma de aplanar una matriz en un array, usando flat
const rta = matrix.flat()
console.log('flat', rta)

// Matriz de 3 niveles. Es de 3 niveles porque hay un array con otro subarray, dentro de otro array 
const matrix2 = [
    [1,2,3],
    [4,5,6, [1,2, [9, 8]]],
    [7,8,9]
]

/* Para usar flat en el caso de una matriz de diferentes niveles, podemos pasarle por parámetro cuántos niveles estamos usando
para que aplane la matriz correctamente*/

const rta2 = matrix2.flat(3)
console.log(rta2)