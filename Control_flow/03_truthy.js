const userMail="abc@mail.com"
if (userMail) {
    console.log("Got user mail");
    
} else {
    console.log("Don;t have user mail");
    
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values
// "0", 'false' , " ", [], {}, function(){}

//Answer as true
//false==0, false=='', 0==''

// Nullish Coalesing Operator(??): null undefined
let val1;
val1=5 ?? 10  
// console.log(val1); -->5

//val1=null ?? 10   -->10
//val1=undefined ?? 15  -->10

// Ternary Operator_condition ? T : F 

const iceTeaPrice =100
iceTeaPrice >= 80 ? console.log("more than 80"):console.log("less than 80");

