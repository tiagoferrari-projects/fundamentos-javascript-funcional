// function declaration

function sayHello() {
    console.log('Hello!')
}

// function invocation
sayHello();

function sayHelloTo(name) {
    console.log('Hello ' + name)
    
    //template string
    console.log(`Hello ${name}`)
}

sayHelloTo('Mike')
sayHelloTo()
sayHelloTo('Mike')

//-------------------------------------------

function returnHi (){
    return 'Hi'
}

let greeting = returnHi()
console.log(greeting)
console.log(returnHi())

function returnHiTo(name) {
    return `Hi ${name}`
}

console.log(returnHiTo('John'))
