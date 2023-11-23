// new binding this
function Person(name, age) {
    this.name = name
    this.age = age
}

const person1 = new Person('Waldo', 44)

//implicit binding
const person2 = {
    name: 'Karen',
    age: 50,
    greeting() {
        console.log('can I speak to your manager? My name is ' + this.name)
    }
}

//explicit binding
//using bind call or apply to explicitly set "this"
const person3 = {
    name: 'Kevin',
    age: 56,
    greeting: function() {
        console.log('can I speak to your manager? My name is ' + this.setTimeout)
    }.bind(window)
}   

person3.greeting()

//Arrow functions
//"this" is lexically scoped (local scope)

const person4 = {
    name: 'Ray',
    age: 59,
    greeting: function() {
        var inner = () => {
            console.log('Way she goes ' + this.name)
        }
        return inner()
    }
}   

person4.greeting()