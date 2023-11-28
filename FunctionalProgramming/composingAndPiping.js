//compose

/* data --> function --> data --> function --> etc */

const compose = (f, g) => (data) => f(g(data))
const multiply = (num) => num*3
const makePositive = (num) => Math.abs(num)
const multiplyAbsolute = compose(multiply, makePositive)

multiplyAbsolute(-50)

//Pipe 
const pipe = (f, g) => (data) => g(f(data))


fn1(fn2(fn3(50)))
compose(fn1, fn2, fn3)(50)
pipe(fn3, fn2, fn1)(50)

//arity is the number of arguments a function takes