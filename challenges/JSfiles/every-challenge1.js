export function checkArray(array) {
    // Tu código aquí 👈
    return array.length == 0 ? false : array.every(number => number % 2 === 0)
}