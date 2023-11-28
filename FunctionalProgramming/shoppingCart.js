//Pure function have:
// no side effects
// input --> output

const array = [1,2,3]
function removeLastItem(arr){
    const newArray = [].concat(arr)
    newArray.pop()
    return newArray
}
function multiplyBy2(arr) {
    return arr.map(item => item*2)
}
const array2 = removeLastItem(array)
const array3 = multiplyBy2(array)
console.log(array, array2, array3)

//Pure function
function a(num1, num2) {
    return num1 + num2
}
a(1,2)



// Shopping cart solution

const user = {
    name: 'Jeff',
    active: true,
    cart: [],
    purchases: []
}

let history = []
const compose = (f,g) => (...arguments) => f(g(...arguments))
shoppingCart(
    emptyCart,
    purchase,
    theft,
    addItem
)(user, {name: 'laptop', price: 600})

   // cart feature
   function shoppingCart(...functions) {
    return functions.reduce(compose)
   }
   // add items to cart
   function addItem(user, item) {
    history.push(user)
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, {cart: updateCart})
   }
   // add 3% tax
   function theft(user) {
    history.push(user)
    const {cart} = user
    const tax = 1.3
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*tax
        }
    })
    return Object.assign({}, user, {cart: updatedCart})
   }
   // purchase option
   function purchase(user) {
    history.push(user)
   return Object.assign({}, user, {purchases: user.cart})
   }
   // empty option
   function emptyCart(user) {
    history.push(user)
    return Object.assign({}, user, {cart: []})
   }

