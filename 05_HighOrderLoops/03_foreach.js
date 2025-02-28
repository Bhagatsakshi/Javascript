const coding=["js","sql","c","cpp"]

coding.forEach( function (item){  //callbackfn is function with no name
    //console.log(item);
    
})

coding.forEach((item)=>{
    //console.log(item);  
})

//refernce to another function
function printme(item){
    //console.log(item);
}
coding.forEach(printme)

//3 accesses
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);   
})

const mycode=[    //in arr,3 obj
    {
        lang:"java",
        filename:"js"
    },
    {
        lang:"c",
        filename:"c"
    },
    {
        lang:"cpp",
        filename:"cpp"
    }
]

//easily accesable by foreach
mycode.forEach((item)=>{
    console.log(item.lang);
    
})

//if we want to store for-each in any varible,and print it gives undefined
//not return value

const num1=[1,2,3,4,5,6,7,8,9]

// var=num.forEach((element) => {
// });
// console.log(var);

//filter return value
const newone = num1.filter((num) => num > 4)
console.log(newone);

// const n = num1.filter((num) => {
//     return num > 4  //NOTE-if you add scope {} then write return keyword else o/p-[]
// })

//using for each
//newNum=[]
//num1.forEach((num) => {
//     if (num > 4) {
//         newNum.push(num)
//     }
// })
 
// console.log(newNum);

//simple project
const books=[
    {title:"1",genre:"science",publish:"2011"},
    {title:"2",genre:"non-fiction",publish:"2009"},
    {title:"3",genre:"fiction",publish:"2010"},
    {title:"4",genre:"History",publish:"2005"},
    {title:"5",genre:"fiction",publish:"2008"}
]

//get fiction books
const userBook=books.filter((bk)=>(bk.genre==="fiction"))
console.log(userBook);

