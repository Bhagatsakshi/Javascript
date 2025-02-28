//for of
const arr=[1,2,3,4,5,6]

for (const x of arr) {
    console.log(x);
}

const greeting="Hello World!"

for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
    
}

//Maps - key-value pairs,unique 
const map=new Map(); 
map.set("India",1);
map.set("USA",2);
map.set("France",1);
map.set("Nepal",4);

//console.log(map);
console.log(map.size);
//console.log(map.delete("USA"));

for (const [key,value] of map) {   //destructuring of map
    console.log(key,"--", value);
    
}

//map not iteratable by for-in