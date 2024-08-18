const name='man'
const repoCount=50

// console.log(name + repoCount +b"value");  not prefer
// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('snake&ladders')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('d'));

const newStr=gameName.substring(0,5)
console.log(newStr);

const anotherStr=gameName.slice(-4,2)
console.log(anotherStr);

const newStrOne='     strawberry         '
console.log(newStrOne.trim());        //remove spaces

const url = 'https://google.com/flowers%20lotus'

console.log(url.replace('%20','-'));

console.log(url.includes('fresh'))   //-->false

console.log(gameName.split('-'));
