//reverse the arr
let a=[2,3,7,4,5]

let temp=[]
for (let i = a.length-1; i >= 0; i--) {
    temp.push(a[i])
}
console.log(temp);
console.log(temp.length);

//method to reverse arr without creating other arr
let i=a[0]
let j=a.length-1
while (i!=j) {
    let temp=a[i]
    a[i]=a[j]
    a[j]=temp
    i++
    j--
}
console.log(a);