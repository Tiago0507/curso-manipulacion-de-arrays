const numbers = [1, 2, 3, 4]

// Forma de saber si alguno de los elementos de un array cumple con alguna condición, pero mediante un for
let rta = false
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i]
    if(element % 2 === 0) {
        rta = true
        break
    }
}

console.log(rta)

// Forma de saber si alguno de los elementos de un array cumple con alguna condición, pero mediante some
const rta2 = numbers.some(item => item % 2 === 0)
console.log('rta2', rta2)

const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true
    },
]

// Uso de some para verificar si alguno de los pedidos fue entregado
const rta3 = orders.some(item => item.delivered)
console.log('rta3', rta3)

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30)
}

// No me funciona la librería :(. Esta librería facilita la manipulación de fechas en JS.
// const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

/* Función que confirma si alguna de las fechas se traspone a otra, por lo que no se puede agendar la cita*/
// const isOverlap = (newDate) => {
//     return dates.some(date => {
//         return areIntervalsOverlapping(
//             {start: date.startDate, end: date.endDate},
//             {start: newDate.startDate, end: newDate.endDate}
//         )
//     })
// }

// console.log('isOverlap', isOverlap(newAppointment))

/* Forma de hacerlo sin la librería
Lo que se está haciendo aquí es ir por cada una de las fechas y ver si se cruzan en el inicio o en el final. Como some devuelve un
booleano, en caso de que se sobrepongan algunas fechas dará true, de lo contrario el false*/

const isOverlapping = (newDate) => dates.some(date => date.startDate <= newDate.endDate && date.endDate >= newDate.startDate)


console.log('isOverlapping', isOverlapping(newAppointment))

