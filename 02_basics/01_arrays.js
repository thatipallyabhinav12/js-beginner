const numbers = [1, 2, 3, 4, 5]
const myHeros = new Array("Hanuman", "Rama", "Krishna", "Shiva")
// Arrays in JS follow 'Shallow Copy' -- Value by Referrence.

// console.log(myHeros)

// Array Methods

numbers.push(6)
let removedVal1 = numbers.pop()

numbers.unshift(7)
let removedVal2 = numbers.shift()

let mynew1 = numbers.slice(1, 3) // 2nd index excluded. Returns a section of array. No change in original array.
console.log("A ", numbers)
console.log(mynew1)

let mynew2 = numbers.splice(1, 3) // Removes a section from original array and returns that section.
console.log("B ", numbers);
console.log(mynew2);
