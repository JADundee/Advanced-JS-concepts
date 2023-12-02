function mergeSortedArrays(array1, array2) {
    //optimized to skip through method
    if (array1.length === 0) {
        return array2
    }
    if (array2.length === 0) {
        return array1
    }
    //
    if (Array.isArray(array1) !== true || Array.isArray(array2) !==true ) {
        alert('invalid arrays') 
    } else {
        const concatSort = array1.concat(array2).sort(function(a, b){return a - b})
        console.log(concatSort) 
    }
    return concatSort
}

mergeSortedArrays([0,3,4,31], [4,6,30])
