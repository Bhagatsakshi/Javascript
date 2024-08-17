/*primitive
7 types : String ,Number ,Boolean, Null, undefined ,Symbol,BigInt */

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail ;
const id = Symbol('123')
const anotherId = Symbol ('123')

console.log( id === anotherId);  //false

const bigNum = 3459890654654n


//Reference (Non Primitive) - Array ,Objects ,Functions

const heros = ["dog","cat","parrot"];

let myObj = {
    name:"abc",
    age:18,
}

const myFun=function(){
    console.log("Hello");   
}

// null datatype is object