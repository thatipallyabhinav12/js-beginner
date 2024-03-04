// singleton
// Object.create() - constructor

// Object literals

let mySym = Symbol("key");

let JSUser = {
    name : "Abhinav",
    "full name" : "Abhinav Thatipally",
    [mySym] : "new key1",
    friends : ["Bhanu", "RR", "Amar"]
}

// console.log(JSUser.name); // 1st way
// // console.log(JSUser.full name);
// console.log(JSUser["full name"]); // 2nd way
// console.log(JSUser[mySym]);

// Object.freeze(JSUser); // no chane in object

JSUser.greet = function() { // create another element outside object
    console.log(`Hello user, ${this["full name"]}`); // 'this' - refers to calling object
}

JSUser.greet();