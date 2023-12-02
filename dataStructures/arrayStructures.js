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

console.log(array)

// static vs dynamic arrays
//static arrays allocate memory beforehand with the set amount
//dynamic allocate memory with automatic resizing


//building an array from scratch


class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    pop() {
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }

    delete(index) {
        const item = this.data[index]
        this.shiftItems(index)
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1]
        }
       delete this.data[this.length - 1]
       this.length--
    }
}

const newArray = new MyArray()
console.log(newArray)