let random=Math.floor(Math.random()*100)+1
//console.log(random);

let guess=-1
while(guess!==random){
    guess=Number(prompt('guess the number'))
    if(guess<1 || guess >100 || isNaN(guess)){
        console.log("try again b/w 1 to 100");
        continue
    }
    if(guess>random){
        console.log("too high,try again");        
    }else if(guess==random){
        console.log("Congrats ,you guess right! ,number was ",guess)      
        break
    }else{
        console.log("too low");        
    }
}
