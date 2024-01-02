const numbers = [1, 30, 49, 29, 10, 13]

// Forma de comprobar si alguno de los números es mayor a 40 con un for
let rta = true
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i]
    if(element >= 40){
        rta = false
    }
}

console.log('rta', rta)

// Forma de comprobar que todos los números sean menores o iguales a 40 usando every
const rta2 = numbers.every(item => item <= 40)
console.log('rta2', rta2)

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
];

// Forma de comprobar que cada uno de los integrantes del equipo sea menor a 15 años. Aquí no es necesario usan map para extraer
// las edades, pues every también evalúa cada objeto y se puede obtener directamente las edades
const rta3 = team.every(item => item.age < 15)

console.log('team', rta3)