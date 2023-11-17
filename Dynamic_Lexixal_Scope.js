// DYNAMIC SCOPE VS LEXICAL SCOPE

const a =function() {
    console.log('a', this)
    const b = function() {
        console.log('b', this)
        const c = {
            hi: function() {
                console.log('c', this)
            }}
        c.hi()
    }
    b()
}

// ISSUE WITH THIS KEYWORD
//*EVERYTHING IN JS IS LEXICALLY SCOPED EXCEPT THIS KEYWORD MEANING IT MATTERS HOW IT IS CALLED
//this will result in referring to window

const obj = {
    name: 'Bob',
    sing()  {
        console.log('a', this)
        var function2 = function() {
            console.log('b', this)
        }
        function2()
    }
}
// TO MAKE THIS LEXICAL, USE ARROW FUNCTIONS
const obj = {
    name: 'Bob',
    sing()  {
        console.log('a', this)
        var function2 = () => {
            console.log('b', this)
        }
        function2.bind(this)
    }
}
obj.sing()()