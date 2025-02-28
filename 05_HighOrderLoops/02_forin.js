//myObject not iteratable by for-of loop so we use for-in
const myObject ={
    js:"Javascript",
    cpp:"C++",
    rb:"Ruby",
    c:"C",
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
        
}

//arrays keys -indexes
const prog=["cpp","c","ruby","js"]

for (const key in prog) {
    console.log(key);       
}