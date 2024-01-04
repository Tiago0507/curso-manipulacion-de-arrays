const phrases = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
]

const phrases2 = [
    "",
    "",
    "",
    "",
]

const phrases3 = [
    "sas asa",
    "d",
    "",
    "s",
]

const phrases4 = []

/* Reto de contar las palabras de un array de frases, tomando en cuenta cuando las frases están vacías */
function countWords(phrases) {
    return phrases.flatMap(item => item.split(' ')).filter(word => word !== "").length
}

const rta = phrases.flatMap(item => item.split(' '))
console.log(rta)
console.log(countWords(phrases))
console.log('empty', countWords(phrases2))
console.log('third', countWords(phrases3))
console.log('four', countWords(phrases4))