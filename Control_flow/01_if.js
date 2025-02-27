const isUserLoggedIn=true

if (isUserLoggedIn) {
    console.log("yes");  
}
else{
    console.log("no");
}

const temp=30

if(temp>25){
    console.log("On AC");
    
} else{
    console.log("Off AC");
    
}


const balance=890
//if (balance>500) console.log("test");     Implicit scope

//if else-if
if (balance>500) {
    console.log("balance is",balance);
}else if(balance<500){
    console.log("less balance");
}else{
    console.log("test");
}

