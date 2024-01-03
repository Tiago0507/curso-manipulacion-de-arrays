/* En este desafío, nos piden que dado un array, ver qué palabras cumplen con cierto término. Con la peculiaridad que debemos
devolver un array con las palabras que cumplen. Como includes nos da un booleano, y necesitamos filtrar el array con base a un 
término, se usa filter que devuelve un array con base a si se cumple la condición o no del includes */

export function filterByTerm(array, term) {
    // Tu código aquí 👈
    return array.filter(item => item.includes(term))
}