const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(100)); 
const productIndex = products.findIndex(item => item.id === '🍔')
if(productIndex !== -1){
    myProducts.push(products[productIndex])
    /*Splice es un método mutable que elimina un elemento o varios de un array. El primer parámetro es la posición del elemento
    a eliminar, y el segundo parámetro es cuántos elementos eliminar a partir de esa posición*/
    //products.splice(productIndex, 1)
}
/*Forma de eliminar un elemento pero de forma inmutable, es decir, sin editar el array original*/
const products2 = products.filter(product => product.id !== '🍔')
console.log("products", products);
console.log('products2', products2)
console.log("myProducts", myProducts);
console.log("-".repeat(100)); 

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

/* Forma de hacer actualizaciones a objetos dentro de un array, de forma mutable*/
const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicious'
    }
}

// const productIndexV2 = productsV2.findIndex(item => item.id === update.id)
// productsV2[productIndexV2] = {
//     ...productsV2[productIndexV2],
//     ...update.changes
// }
// console.log('update', productsV2)

/* Manera de hacer actualizaciones pero de forma inmutable*/
const productsUpdateInmutable = products.map(item => {
    if(item.id === update.id){
        // Si el item cumple con el objeto de la actualización, copia lo del ítem más los cambios y lo retorna como un objeto
        return{
            ...item,
            ...update.changes
        }
    }
    // Si no hay cambios, solo se copia todo el objeto tal cual sin generar cambios en el array original, ya que map es inmutable
    return {...item}
})

console.log('original', productsV2)
console.log('updateInmutable', productsUpdateInmutable)
