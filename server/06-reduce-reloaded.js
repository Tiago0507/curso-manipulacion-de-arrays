const items = [1, 3, 2, 3]

const rta = items.reduce((obj, item) => {
    // Se confirma si existe ya el elemento dentro del array, en caso de que no, se dice que ese elemento existe 1 vez
    if(!obj[item]) {
        obj[item] = 1
    }else{ // Si ya existe, se le suma a la cantidad de veces que aparece la nueva aparición
        obj[item] = obj[item] + 1
    }
    return obj // Se retorna el objeto, que es al que hace referencia el segundo parámetro del reduce
}, {})

console.log(rta)

const data = [
    {
        name: 'Nicolas',
        level: 'low'
    },
    {
        name: 'Andrea',
        level: 'medium'
    },
    {
        name: 'Zulema',
        level: 'hight'
    },
    {
        name: 'Santiago',
        level: 'low'
    },
    {
        name: 'Valentina',
        level: 'medium'
    },
    {
        name: 'Lucia',
        level: 'hight'
    },
]

/* En este caso, solo nos interesa trabajar con el level, por eso usamos map para filtrar solo ese atributo. Luego usamos el mismo
algoritmo de arriba con reduce para contar las veces que aparece determinado nivel */

/* El map devuelve un array de niveles y se trabajará sobre ese array de niveles, no sobre el array de objetos */
const rta1 = data.map(item => item.level).reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1
    }else{
        obj[item] = obj[item] + 1
    }
    return obj
}, {})

console.log(rta1)