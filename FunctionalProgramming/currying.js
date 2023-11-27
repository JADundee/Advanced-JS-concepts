//Currying
const multiply = (a, b,c ) => a*b*c
curriedMultiply = (a) => (b) => (c) => a*b*c
curriedMultiply(5)(6)(2)
//take peramiters individually

//Partial Application
const multiply = (a, b, c) => a*b*c
partialMultiply = multiply.bind(null, 5)
partialMultiply(4, 10)