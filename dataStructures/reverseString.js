function reverse(string) {
    //check variable type
    if (!string || string.length < 2 || typeof string !== 'string') {
        alert('Enter a string of at least 2 characters')
    } else {
    // turn string into array
    let array = string.split('')
    //reverse array
    array.reverse()
    //return reversed array back into string
    reversedString = array.join('')
    console.log(reversedString)
    // simplified into one line
    return string.split('').reverse().join('')
    }
}
//ES6 one line version
const reverse2 = string => string.split('').reverse().join('')

reverse("Hello World!")


