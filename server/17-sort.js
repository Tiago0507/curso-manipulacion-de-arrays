const months = ["March", "Jan", "Feb", "Dec"];
// Ordenamiento por orden alfabético
months.sort()
console.log(months)
// Ordenamiento por mes
const monthOrder = {
  "Jan": 1,
  "Feb": 2,
  "Mar": 3,
  "Apr": 4,
  "May": 5,
  "Jun": 6,
  "Jul": 7,
  "Aug": 8,
  "Sep": 9,
  "Oct": 10,
  "Nov": 11,
  "Dec": 12
}
months.sort((a, b) => monthOrder[a] - monthOrder[b]);
console.log(months);


const numbers = [1, 30, 4, 21, 100000];
// Manera de hacer que sort ordene un array de números de forma ascendente
numbers.sort((a, b) => a - b)
console.log(numbers)
// Descendente
numbers.sort((a, b) => b - a)
console.log(numbers)

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort() // Si el navegador es viejo: words.sort((a, b) => a.localeCompare(b))
console.log(words)

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date (2021, 3, 8, 4),
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date (2021, 9, 12, 3),
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date (2021, 8, 2, 2),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date(2021, 1, 1, 9, 30),
    },
];
// Ordenamiento de objetos por total
orders.sort((a, b) => a.total - b.total)
console.log(orders)

// Ordenamiento de objetos por fecha
orders.sort((a, b) => a.date - b.date)
console.log(orders)