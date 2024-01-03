// Matriz con un solo nivel
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// Matriz de 3 niveles. Es de 3 niveles porque hay un array con otro subarray, dentro de otro array
const matrix2 = [
    [1,2,3],
    [4,5,6, [1,2, [9, 8]]],
    [7,8,9]
]

// Flat recursivo
const flatRecursive = matrix => {
    let result = []

    // Si no es un objeto, lo vuelve array
    if(typeof matrix != 'object') return [matrix]
    // Como es un objeto, como un array, lo concatena al resultado final
    matrix.forEach(item => {
        result = result.concat(flatRecursive(item))
    })
    return result
}

const rta = flatRecursive(matrix)
console.log('matrix1', rta)

const rta2 = flatRecursive(matrix2)
console.log('matrix2', rta2)