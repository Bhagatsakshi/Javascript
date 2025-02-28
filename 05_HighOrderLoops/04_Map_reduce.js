//Map
const num1=[1,2,3,4,5,6,7,8,9]

// const nums=num1.map((num)=> num+10)
// console.log(nums);

//chain map- O/p of 1st map,is given to 2nd ,like that you can chain multiple map
const nums=num1.map((num)=> num*10).map((num)=>num+1)
console.log(nums);

//Reduce -used in shopping cart like that

const num2=[1,2,3]
// const total=num2.reduce(function (acc,currval) {
//     console.log(acc,currval);  //how values assigning
//     return acc + currval
// },0)  //--given initial value

//same by arrow function
const total=num2.reduce((acc,curr) => acc+curr,0)

console.log(total);

//small project

const shoppingcart=[
    {
        item1:"cpp course",price:2999
    },
    {
        item2:"js course",price:3999
    },
    {
        item3:"ML course",price:7999
    },
    {
        item4:"Django course",price:6999
    },
]

const priceToPay=shoppingcart.reduce((acc,item)=> acc+item.price,0)

console.log(priceToPay);
