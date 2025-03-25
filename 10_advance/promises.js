const promise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Tak is complete');
        resolve()
    },500)
});

promise1.then(function () {
    console.log('promise consumed');
    
})

/* OR

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Tak is complete');
        resolve()
    },1000)
}).then(function () {
    console.log('promise consumed');
})
*/

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"mail.com"})
    }, 500);
})

promise3.then(function (user) {
    console.log(user);
    
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"koel",password:"123"})
        }else{
            reject('ERROR:something went wrong')
        }
    }, 500);

})

const username=promise4.then((user) => {
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch(function (error) {
    console.log(error);
}).finally(()=>console.log("the promise is wither resolved or rejected")
)


const promise5=new Promise(function (resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"js",password:"123"})
        }else{
            reject('ERROR:JS went wrong')
        }
    }, 500);

})

async function consumep5(){
    try{
        const response=await promise5
    console.log(response);
    }catch(error){
        console.log(error);
        
    }
}

consumep5()

