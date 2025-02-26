//Immediately Invoked Function Expressions(IIFE)
//this is used because global scope ke wajah se pollution hoti hai
//for removing it we used IIFE
(function chai() {
    //named IIFE
    console.log('DB request');
    
})();

(()=> {
    //Unnamed IIFE
    console.log('DB response');
    
})();

((name)=> {
    console.log(`DB connected ${name}`);
    
})("v4");
//add () outside function and below one
//1.()--funtion definition 2.()--execution