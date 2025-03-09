//in js,dynamic arrays ,where in arr you can store diff data types elements
let arr=[]
arr.push(8)
arr[1]=0.4
arr.push("abc")
arr.push(true)

arr[7]=40   //it prints 40 after true leaving 3 spaces empty

console.log(arr);

// arr.pop()
console.log(arr.length);

let arry=new Array(3)
arry.push(10)  /* declaring size and pushing 10 will store 10 
                 after leaving 3 empty spaces */
console.log(arry);

let a=[2,3,4,5]

//sum of arr values
let sum=0
for (let i = 0; i < a.length; i++) {
    sum+=a[i]
}
console.log(sum);