//object literals
const mySym=Symbol("key1")
//to add in dict ,use [mysym] as if you dont use [] then it become str

const JsUser={
    name:"hitesh",
    age:18,
    [mySym]:"key1",
    location:"Jaiput"
}

//if loaction is longname to write again&again,so rename it
//const {location:loc}=JsUser ,now you can use loc
//Called as "Destructuring" -->in react you will see,({company}) ,it is destructuring
//console.log(loc)  -->Jaipur

console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser[mySym]);
console.log(typeof mySym);         //symbol

JsUser.location="Jaipur"        //location modify
console.log(JsUser)

//if you use object.freeze(jsUser) then no changes will add in dict
//JsUser.name="john" no change or error

JsUser.greeting=function(){
    console.log(("Hello "+ JsUser.name));  
    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greeting());

//Part2

//const tinderUser=new Object()     singleton oject
//const tinderUser1={}                 non singleton
//both return {}

const tinderUser1={} 
tinderUser1.id="123"
tinderUser1.name="sammy"
tinderUser1.islogin=false

//console.log(tinderUser1);

const regUser={
    email:"abc@mail.com",
    fullname:{
        userFN:{
            fname:"abc",    //in obj ,another obj
            lname:"xyz"
        }
    }
}

console.log(regUser.fullname.userFN.lname);

const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

//const obj3={pbj1,obj2} //in will not direct concat so use below one
const obj3=Object.assign({},obj1,obj2)
//used {} as it will be as new obj ,if not {} then values store in obj1
console.log(obj3);

//OR spread out method
const obj4={...obj1,...obj2}

console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));
console.log(tinderUser1.hasOwnProperty('islogin'));

//APIS
