function calculatePrice(...num1){    //rest operator ,wil make arr of prices
    return num1
}

// function calculatePrice(V1,V2,...num1){    v1--200,v2--400,num1--300
//     return num1
// }

console.log(calculatePrice(200,400,300));

//nested fucntion
function one() {
    const user="abc"
    function two() {
        const web="google"
        console.log(user);    //abc
    }
    // console.log(web); cannot access outside the scope
    two()
}
one()
//this scope level also happen in if 

