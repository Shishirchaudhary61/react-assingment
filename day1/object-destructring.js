/*
Task 5 – Object Destructuring
Create an object person with keys 1, age, and country. Destructure the object to extract nfame and country into variables and log them.
*/

const person = {
  name: "Ram",
  age: 25,
  country: "Pokhara",
};

const { name, country } = person;

console.log(name);
console.log(country);