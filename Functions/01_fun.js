// function sayname(){
//     console.log("abc");   
// }

// sayname()

//in function defination,numbers are parameters
function addnumbers(num1,num2){
    console.log(num1+num2);
}

addnumbers(2,4)    //when you call,numbers are arguments
// addnumbers(2,"4") -->24
// addnumbers(2,"a") -->2a

function subnumbers(num1,num2){
   let res=num1-num2;
   return res;
}

const res=subnumbers(3,4);
console.log(res);

function loginuser(user="sam"){    //overrides
    if(!user){
        console.log("enter username");
        return
    }
    return `${user} just logged in`
}

console.log(loginuser("hitesh"));

