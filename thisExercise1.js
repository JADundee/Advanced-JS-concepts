var b = {
    name: 'jay',
    say() {console.log(this)}
}
b.say() //returns object 'b'

var c = {
    name: 'jay',
    say() {return function() {console.log(this)}}
}
c.say() //returns function()
c.say()() // returns window object

var d = {
    name: 'jay',
    say() {return () => console.log(this)}
}
d.say() // returns function
d.say()() // returns  objevt 'd' 
//this is because this keyword is lexically scoped inside arrow function

