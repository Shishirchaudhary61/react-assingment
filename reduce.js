//===Reduce in JS==//
//task 1
//simple example :sum of number
const number = [1,2,3,4,5]

const sum = number.reduce((accumulator, Value) => {
    // logic
    return accumulator + Value; //1,3,6,10,15
}, 0);

console.log(sum) //=>15

//task 2
//real life example


const fruit = ["apple","banana","apple","banana","apple","orange"]


const count=fruit.reduce((accumulator,fruits) =>{
    accumulator[fruits] = (accumulator [fruits] || 0) +1;
    return accumulator; 
},{})
console.log ("fruit count", count)