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

// stack (primitive)   heap(non primitive)

let myName='abc'
anotherName=myName
anotherName='xyz'

console.log(myName);     //-->abc
console.log(anotherName);     //-->xyz
//in stack ,values copy is changing not a value

myUser={
    name:'mon',
    age:56
}

myInfo=myUser
myInfo.age=90

console.log(myUser.age);       //-->90
console.log(myInfo.age);       //-->90
// chnages made on original value 

