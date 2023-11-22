Date.prototype.lastYear = function() {
    return this.getFullYear() - 1
}
new Date().lastYear()

Array.prototype.map = function() {
    let arr = []
    for (let i = 0; 1 < this.length; i++) {
        arr.push((this[i] + `map`)) 
    }
    return arr
}
console.log([1,2.3].map())