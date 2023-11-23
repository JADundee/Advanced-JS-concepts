// factory functions
function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return name + ' attacks with ' + weapon 
        }
    }
}

const Legoless = createElf('Legoless', 'Bow')
