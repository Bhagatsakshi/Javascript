//in arr you can add other data types like in myArr - abc,hi accepted
const myArr = [0,1,2,3,4,5]

console.log(myArr[0]);

//shallow copy - original value will change ,when you change refernce
//deep copy - only reference will change not original value

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

//Array methods
myArr.push(6)
console.log(myArr)

myArr.pop()
console.log(myArr);

// myArr.unshift(9) - it will add 9 in 0th position
// not prefer to use , if 10000 items so it is time consuming as adding to first take time

// myArr.shift()  - delete the first element
// console.log(myArr);

console.log(myArr.includes(9));      //arr mai hai ya nhi
console.log(myArr.indexOf(3));       //returns -1 if not available

console.log(myArr);
const newArr = myArr.join()         //convert to string

console.log(myArr);
// console.log(newArr); 
console.log(typeof newArr);

// slice , splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B",myArr);

const myn2 = myArr.splice(1,3)          //manipulates original array
console.log(myn2); 

console.log("C",myArr);

const flowers = ['lotus','tulip','marigold','mogra','Dalia']
const f2 = ['jai','jui','periwinkle']

// flowers.push(f2)

// console.log(flowers);    add f2 as list in arr so use concat
// console.log(flowers[3][1]);

// const allflowers = flowers.concat(f2)    
// console.log(allflowers);

//spread out
const allFlowers = [...flowers,...f2]
console.log(allFlowers);

const an_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

//spread out
const real_an_arr = an_arr.flat(Infinity)
console.log(real_an_arr);

console.log(Array.isArray("hello"))
console.log(Array.from("hello"))     //coverting to array

console.log(Array.from({name:"abc"}));   //interesting

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3));