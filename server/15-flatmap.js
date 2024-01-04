const users = [
    {userId: 1, userName: 'Tom', attributes: ['Nice', 'Cute']},
    {userId: 2, userName: 'Mike', attributes: ['Lovely']},
    {userId: 3, userName: 'Nico', attributes: ['Nice', 'Cool']}
]

/* Forma de ir por cada atributo, transformarlo a un array y aplanarlo, usando por separado map y flat*/
const rta = users.map(user => user.attributes).flat()
console.log('map y flat', rta)

/* Forma de usar flatMap para transformar y aplanar al tiempo un array de arrays*/
const rta2 = users.flatMap(user => user.attributes)
console.log('flatMap', rta2)

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
};


const rta3 = Object.values(calendars).flatMap(item => {
    //console.log(item)
    // Por cada item, que es un array, obtengo el atributo de startDate de cada objeto (date)
    return item.map(date => date.startDate)
})
console.log(rta3)