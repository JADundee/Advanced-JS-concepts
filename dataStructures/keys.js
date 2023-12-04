


keys() {
    const keysArray = []
    for (let i = 0; i < this.data.length; i++ ) {
        if(this.data[i]) {
            keysArray.push(this.data[i][0])
        }
    }
    return keysArray
}

const myHashTable = new HashTable(50)
myHashTable.set('grapes', 100)
myHashTable.set('grapes', 1000)
myHashTable.set('grapes', 69)
myHashTable.keys()