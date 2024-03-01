let score = 400.873 // developer might be unaware whether data is in Number, So:
let anotherScore = new Number(100.21321) // this is surely a Number. // object is created.

// Methods

// console.log(score.toString()) // Number - String
// console.log(anotherScore.toFixed(3)) // limits decimal point
// console.log(score.toPrecision(3)) // displays only limited numbers
// console.log(new Number(1000000).toLocaleString('en-IN')) // places ","'s, hence, increases readability.
// Number.MAX_VALUE, .MIN_VALUE (SAFE)


// ********************************************************************



// Math in JS

// console.log(Math) // an object; has properties & methods

let number = -12214.635
// console.log(Math.abs(number)) // +ve
// console.log(Math.round(number)) // rounds-off
// console.log(Math.ceil(number)) // next highest; in control
// console.log(Math.floor(number)) // previous value; in control
// console.log(Math.min((1, 2, 3, 4, 1)));
// console.log(Math.max((1, 2, 3, 4, 1))); // guess output
// console.log(Math.max(1, 2, 3, 4, 1));

// console.log(Math.random())
// console.log(Math.random() * 10)
// console.log((Math.random() * 10) + 1)
// console.log(Math.floor((Math.random() * 10) + 1))

// for range:

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random(123.4352) * (max - min + 1)) + min)