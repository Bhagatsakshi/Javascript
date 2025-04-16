let arr = [1, 2, 3, 4, 5];
let k = 2;
k = k % arr.length;
// for (let i = 0; i < k; i++) {
//     let temp = arr[arr.length - 1];
//     for (let j = arr.length - 1; j > 0; j--) {
//         arr[j] = arr[j - 1];
//     }
//     arr[0] = temp;
// }
//console.log(arr);


//2nd way
// let temp = new Array(arr.length);
// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[i];
// }
// for (let i = arr.length - 1; i >= 0; i--) {
//   arr[(i + k) % arr.length] = temp[i];
// }
// console.log(arr);

//Efficient

reverse(0, arr.length - k - 1)
reverse(arr.length - k, arr.length - 1);
reverse(0, arr.length - 1);

console.log(arr);

function reverse(i, j) {
  while (i < j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
  }
}