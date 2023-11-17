// Call()
// () is just shorthand for .call()


// Apply()
// works the same as call()

// Also works like this to call amethod to another object
const heals = {
    name: 'healz',
    health: 50,
    heal() {
        return this.health = 100
    }
}

const dps = {
    name: 'DK',
    health: 20
}

heals.heal.call(dps)


// bind()
//returns a new function with certain context

const healDps = heals.heal.bind(dps, 100, 20)
healDps()

//RECAP
//Call and apply are useful for borrowing methods from objects while bind is useful to call functions later with context