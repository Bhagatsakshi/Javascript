const user={
    user:"abc",
    price:999,

    welcomemsg:function(){
        console.log(`${this.user},welcome to website`);
        
    }
}

user.welcomemsg()
user.user="sam"
user.welcomemsg()

//this keyword is used to refering currect context
console.log(this);      //-->{}


function chai() {
    console.log(this);   //global objects 
    console.log(this.user);      //undefined
    
}

// const chai1=function() {
//     let user="xyz";
//     console.log(this.user);      //undefined
    
// }

// chai()
// chai1()

//ARROW Function
const chai1=() => {
    console.log(this);   //{} 
    console.log(this.user);      //undefined
    
}
chai1()

// const addnum=(num1,num2)=>{ return num1+num2 }    <--explicit return
//OR 
// const addnums=(num1,num2)=>(num1+num2)    use () so no return needed
const addnums=(num1,num2)=>num1+num2     //implicit return
console.log(addnums(3,4))


const add=(n1,n2)=>({user:"abc"})
console.log(add(3,4));   //user:abc
