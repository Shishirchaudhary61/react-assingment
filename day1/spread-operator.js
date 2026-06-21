/*
Task 9 – Spread Operator with Arrays
Create two arrays [1, 2, 3] and [4, 5]. Merge them into a new array using the spread operator and log the result.
*/

const array1 = [1, 2, 3];
const array2 = [4, 5];

const mergedArray = [...array1, ...array2];

console.log(mergedArray);