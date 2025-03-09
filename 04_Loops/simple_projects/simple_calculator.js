console.log("Press 1 for +");
console.log("Press 2 for - ")
console.log("Press 3 for * ")
console.log("Press 4 for / ")
console.log("Press 5 for exit");
let a=Number(prompt("enter 1st num"))
let b=Number(prompt("enter 2nd num"))
console.log("Numbers are ",a,b); 

let Yes=true;
while(Yes){
   let num=Number(prompt("enter choice"))
   switch (num) {
    case 1:
        console.log("addition is ",a+b);
        break;
    case 2:
        console.log("subtraction is ",a-b);
        break;
    case 3:
        console.log("Multiplication is ",a*b);
        break;
    case 4:
        console.log("Division is ",a/b);
        break;
    case 5:
        console.log("exit");
        Yes=false
        break;
    default:
        console.log("Invalid");
        break;
}
}