let s="abcab"
let arr=new Array(128).fill(0)
for (let i = 0; i < s.length; i++) {
    let index=s.charCodeAt(i);
    arr[index]+=1
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>0) {
        console.log(String.fromCharCode(i)+' appears '+arr[i]+" times");
    }
    
}