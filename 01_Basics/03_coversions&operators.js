score="33"
console.log(typeof score);

varNum=Number(score)
console.log(typeof varNum);

console.log(varNum);
// "33"=>33
// score="33abc"==>Nan
// 1=>true ; 0=>false

let isLoggedIn = " "
let bool = Boolean(isLoggedIn)
console.log(bool);

// ""==>false
// "abc"=>true
// " "=>true

let someNo=33
let stringNo=String(someNo)
console.log(stringNo);
console.log(typeof stringNo);

// **********************Operations*****************************

let value=3
let negValue = -value
console.log(negValue);

/*
2+2=4
2-2=0
2*2=4
2**3=8
2/3=float
2//3=int value
2%3
*/

let str1='hello'
let str2='abc'
let str3=str1+ str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");

/*
"1"+2+2=>122
1+2+"2"=>32
(3 + 4) * 5 % 3
*/

console.log(true); //=>true

// + true =>1
// + "" =>0

// let num1,num2,num3
// num1=num2=num3=4       not prefer ,try to maintain readability

let gameCounter=100
gameCounter++;
console.log(gameCounter);