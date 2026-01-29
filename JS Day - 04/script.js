Q2. 


let arr = [-3,5,16,-11,-7,];
let res = []
while(arr.length>0){
    let val = arr.shift();
    if(val>0){
        res.push(val);
    }
    console.log(res);


// Q3. check if a number is palidrome or not
function palindrome ()
let arr2 = [1,2,3,2,1];
let original = []; //1,2,3,2,1
let reversed = []; //1,2,3,2,1
// copy all the elements of given array to original array

for(let i=0;i<arr2.length;i++){
    original.push(arr2[i]);
    // console.log(original);
}

// reversed the given array
while (arr2.length>0){
    reversed.push(arr2.pop())
}
for (i =0;i<original.length;i++){
    if(original[i] !== reversed[i]){
        return "not a palindrome"
    }
}
return "its a palindrome";
}
console.log(palindrome());