//in JS objects are an example of hash tables

let character = {
    race: 'Goblin',
    frugal: true,
    name: 'Sheks',
    trait: function() {
        console.log('trade me!')
    }
}


character.race // 0(1)
character.spell = "avc" // 0(1)
character.trait() // 0(1)

//hash collision 0(n/k)

const a = new Map()
//allows you to save any data type as the key

