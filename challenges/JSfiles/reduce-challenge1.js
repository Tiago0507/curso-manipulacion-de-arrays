function generateRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min + 1) + min)
}

const numbers = []
for(let i = 0; i < 10; i++){
    let newNumber = generateRandomNumber(0, 20)
    numbers.push(newNumber)
}

console.log(numbers)

const rta = numbers.reduce((obj, number) => {
    if(number < 6) {
        obj['0-5'] += 1
    }else if(number < 11){
        obj['6-10'] += 1
    }else if(number < 16){
        obj['11-15'] += 1
    }else if(number < 21){
        obj['16-20'] += 1
    }

    return obj
}, {
    '0-5': 0,
    '6-10': 0,
    '11-15': 0,
    '16-20': 0
})

console.log(rta)