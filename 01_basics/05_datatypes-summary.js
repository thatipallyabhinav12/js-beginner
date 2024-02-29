// datatypes divded to two types on basis of storing data and accessing that data

// Primitive : String, Number, BigInt, Boolean, Null(empty), Undefined, Symbol(unique) //(all of them are of "call-by-value")
// Note : "null" is not equal to zero('0'); returns object

// let id = Symbol('123')
// let anotherId = Symbol('123') // returns 'symbol'
// const bigNumber = 4389289236462394342n // bigInt


// Reference (Non- primitive) : Array, Object, Function  //(all of them are accessed by call-by-reference)
// array returns array object, function returns function object, object returns an object
const arrVar = ["Abhinav", 20, {
    cgpa : 8.13
}]

console.log(typeof arrVar)

const objVar = {
    name : "Abhinav",
    age : 20
}

const funcVar = function() {
    console.log("hello");
}

console.log(typeof funcVar)

// Type of Language are of two - static & dynamic
// statically types - type-checking done at compile time
// dynamically types - type-checking done at run-time