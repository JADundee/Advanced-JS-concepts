// factory functions
const elfFunctions = {
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
Legoless.attack = elfFunctions.attack

// Object.create() to clean it up

const elfActionsStore = {
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
console.log(Legoless.attack())