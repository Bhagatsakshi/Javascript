let s = "racecar"
let ispallindrome = true;
let i=0
let j=s.length-1

while(i<j){
    if (s.charAt(i)!=s.charAt(j)) {
        ispallindrome=false
        break
    }
    i++
    j--
}

if (ispallindrome) {
    console.log("pallidrome");
}
else{
    console.log("not pallidrome");
}