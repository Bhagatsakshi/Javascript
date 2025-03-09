let num=145
// let r=1
let sum=0
while (num>0) {
    r=num%10  
    fact=1
    for (let i = 1; i <= r; i++) {
        fact=fact*i 
    }
    sum+=fact
    num=Math.floor(num/10)
}
console.log(sum);