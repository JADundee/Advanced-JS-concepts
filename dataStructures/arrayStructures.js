const array = ['0', '1', '2', '3']
//4x4 = 16 bytes of storage

//push
array.push('4') // 0(1)

//pop
array.pop() // 0(1)

//unshift
array.unshift('x') // 0(n) 

//splice(index, delete count, addition/replacement )
array.splice(2, 0, 'y') // 0(n/2) 

//accessing array
array[2] // 0(1)