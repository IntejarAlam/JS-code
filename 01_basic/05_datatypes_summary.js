// ********** Primitive ********
// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null

let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

const bigNumber =  1263787872397837396n  //BigInt
console.log(bigNumber)

//***********Reference (Non Primitive)*********
// Array, Objects, Functions

// Array
const car = ["BMW", "Audi", "Tesla"];

//Object
let myObj = {
    name: "Alam",
    age: "25",
}

//Function
const myFunction = function(){
    console.log("Hello World");

}

// https://262.ecma-international.org/5.1/#sec-11.4.3