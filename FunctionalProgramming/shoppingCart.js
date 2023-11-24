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