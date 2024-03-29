// factory functions
/* const elfFunctions = {
    attack() {
        return this.name + ' attacks with ' + this.weapon 
    }
}

function createElf(name, weapon) {
    return {
        name,
        weapon,
    }
}

const Legoless = createElf('Legoless', 'Bow')
Legoless.attack = elfFunctions.attack */

// Object.create() to clean it up

/* const elfActionsStore = {
    attack() {
        return this.name + ' attacks with ' + this.weapon 
    }
}

function createElf(name, weapon) {
    let newElf = Object.create(elfActionsStore)
        newElf.name = name
        newElf.weapon = weapon
        return newElf
}

const Legoless = createElf('Legoless', 'Bow')
console.log(Legoless.attack()) */

// older method but closer to object oriented programming 
// Constructor Functions ("new" keyword/ new "F"unction())

// constructor functions come with call, apply, bind in the prototype: and arrays come with map, for each, reduce. Arrow functions make the this. reference global (lexically scoped this.)
/* function elf(name, weapon) {
    this.name = name
    this.weapon = weapon
}

Elf.prototype.attack = function() {
    return this.name + ' attacks with ' + this.weapon
}

const Legoless = new Elf('Legoless', 'Bow')
Legoless.attack() */

// new Function 


/* const Elf1 = new Function('name', 'weapon', `this.name = name
this.weapon = weapon`)
const Legoless = new Elf1('Legoless', 'Bow') */


// ES6 classes refactor

class Elf {
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon
    }
    attack() {
        this.name + ' attacks with ' + this.weapon
    }
}

const Legoless = new Elf('Legoless', 'Bow')
Legoless.attack()

//new race
 const Mekkatorque = new Elf('Mekkatorque', 'Axe')

//inheritance refactor
//


class Race {
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon
    }
    attack() {
        this.name + ' attacks with ' + this.weapon
    }
}

class Elf extends Race {
    constructor(name, weapon, type) {
        super(name, weapon)
        this.type = type
    }
    //polymorphism
    attack(magic) {
        return 'attack with ' + magic
    }
}

class Gnome extends Race {
    constructor(name, weapon, skill) {
        super(name, weapon)
        this.skill = skill
    }
    Build() {
        return 'Best tinkerer in Azeroth'
    }
    //polymorphism
    attack() {
        return "attack with blunt object"
    }
}

const ray = new Elf('Ray', 'Chair', 'Chairbound')
const mekkatorque = new Gnome('Mekkatorque', 'Axe', 'Engineering')