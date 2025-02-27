const accountId=7867856      //const-value cannot change
let accountEmail='abc@mail.com'
var accountPassword='12345'   
accountCity='Jaipur'    //not prefer 

let accountState
console.log(accountState);    //value will be undefined

// accountId=2 not allowed
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])
