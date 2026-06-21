const student={
    name:"shishir",
    age :21,
    adress :"ktm",
    phone: "9812841627",
    sex :"male"
}
const {name,...details} =student;

console.log(name);
console.log(details)
