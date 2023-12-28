const letters = ['a', 'b', 'c']

/*Forma de hacerle una transformación a un array creando una copia nueva y usando un for*/
// const newLetters = []
// for(let i = 0; i < letters.length; i++){
//     newLetters.push(letters[i] + '++')
// }

// console.log('original', letters)
// console.log('new', newLetters)

// Forma de hacer una transformación usando map
const newArray = letters.map(item => item + '++')

console.log('original', letters)
console.log('new', newArray)