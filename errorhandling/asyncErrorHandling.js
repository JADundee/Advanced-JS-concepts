Promise.resolve('async error')
.then(response => {
    throw new Error('fail')
    // errow is thrown and .catch is executed next
    return response
})
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err)
})
// can chain by returning error instead of logging and then
.then(response => (
   console.log(response.message)
))
//async await error handling
(async function() {
    await Promise.resolve('1')
    await Promise.reject('2')
    console.log('3')
})()

//Extending errors to hide information from people
class AuthenticationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'authenticationError'
        this.favouriteSnack = 'chips'
    }
}
class PermissionError extends Error {
    constructor(message) {
        super(message)
        this.name = 'PermissionError'
        this.message = 'chips'
    }
}
class DatabaseError extends Error {
    constructor(message) {
        super(message)
        this.name = 'DatabaseError'
        this.favouriteUser = 'Chips Dubbo'
    }
}

const a = new AuthenticationError('error')
a instanceof DatabaseError