
// 1) rest operator
const arr =[1,2,3,4,5];

function sumwithrest(...nums){

    return nums.reduce ((acc,n)=> acc +n, 0);
}

function sumfromarray(arr){
    return sumwithrest(...arr);
}
console.log("Array:",arr);
console.log("sum (rest):", sumwithrest(10,20,30));
console.log("sum (array+spread):",sumfromarray(arr));