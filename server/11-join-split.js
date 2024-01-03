const elements = ['Fire', 'Air', 'Water']

// Forma de concatenar palabras mediante un separador usando for
let rtaFinal = ''
const separator = '--'
for(let i = 0; i < elements.length; i++){
    const element = elements[i]
    rtaFinal += element
    // Para que no se ponga el separador después de la última palabra, pones el separador en todas las posiciones menos en la última
    if(i != elements.length - 1){
        rtaFinal += separator
    }
}

console.log('for', rtaFinal)
// Forma de concatenar palabras mediante un separador usando join
const rta = elements.join('--')
console.log('join', rta)

const title = 'Curso de manipulación de arrays'
/* Split hace prácticamente lo contrario a join, divide un string en un array, siguiendo un patrón. En este caso, el split divide
cada que haya un espacio, pero si estuviéramos en un csv, lo podría dividir cada que haya una coma, por ejemplo. Lo que se está 
haciendo en este caso, es diviir el título en un array, luego volverlo a unir mediante guiones y al final todo se pasa a minúscula*/
const urlFinal = title.split(' ').join('-').toLowerCase()
console.log('url', urlFinal)