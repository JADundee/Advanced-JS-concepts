//Currying
const multiply = (a, b,c ) => a*b*c
curriedMultiply = (a) => (b) => (c) => a*b*c
curriedMultiply(5)(6)(2)
//take peramiters individually

//Partial Application
const multiply = (a, b, c) => a*b*c
partialMultiply = multiply.bind(null, 5)
partialMultiply(4, 10)



//caching and memoization
function addTo80(n) {
    console.log('long')
    return n + 80
}


function memoizedAddTo80(n) {
    let cache = {}
    return function(n){
        if (n in cache) {
            return cache[n]
        } else {
            console.log('')
            cache[n] = n + 80
            return cache[n]
        }
    }
}

const memoized = memoizedAddTo80()