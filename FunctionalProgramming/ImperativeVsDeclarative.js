//imperative
for (let i = 0; i < 1000; i++) {
    console.log(i)
}

//Declarative
[1,2,3].forEach(item => console.log(item))\

//declarative will be broken down into more imperative for machine languages





// Immutability 
const obj = {name: 'Bill'}
function clone(obj) {
    return {...obj} //this is pure
}

function updateName(obj) {
    const obj2 = clone(obj)
    obj2.name = 'Bell'
    return obj2
}
const updatedObj = updateName('Bell')
//