const totals = [1, 2, 3, 4]

// Forma de hacer un acumulador con un for
let sum = 0
for(let i = 0; i < totals.length; i++){
    sum += totals[i]
}
console.log(sum)

// Forma de hacer un acumulador con reduce
/* Reduce lo que hace es reducir todo un array en un solo valor. Un ejemplo que puede ayudar a ilustrar es un array de comida de
diferente tipo que al final de ser consumido se convierte en desechos por las personas. En este caso, el reduce lo que hace es tomar
un array de números y los convierte en un único valor que en este caso es el acumulador total del array. Aquí, la función reduce
recibe una arrow function y un estado inicial que tendrá sum que será 0*/

// Comúnmente, reduce recibe dos parámetros, la función callback o de retorno de llamado, que va por cada elemento del array y acumula
// un resultado, y el estado inicial
const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta', rta)