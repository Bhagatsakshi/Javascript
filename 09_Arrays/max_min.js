let a=[2,3,4,5]

//max element in arr
let max=a[0]
for (let i = 1; i < a.length; i++) {
    if (a[i]>max) {
        max=a[i]
    }
}
console.log(max);

//min element in arr
let min=a[0];
for (let i = 1; i <= a.length; i++) {
    if (a[i]<min) {
        min=a[i]
    }
}
console.log(min);

//2nd max element 
let max1=Math.max(a[0],a[1]) 
let max2=Math.min(a[0],a[1])

for (let i = 2; i < a.length; i++) {
    if(a[i]>max1){
        let temp=max1  
        max2=temp
        max1=a[i]
    }
}
console.log(max1);
console.log(max2);

//2nd min element 
let min1=Math.min(a[0],a[1]) 
let min2=Math.max(a[0],a[1])

for (let i = 2; i < a.length; i++) {
    if(a[i]<min1){
        let temp=min1  
        min2=temp
        min1=a[i]
    }
}
console.log(min1);
console.log(min2);
