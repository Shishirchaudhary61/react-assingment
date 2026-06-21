
const student = {
    name:"ram",
    grade:"A",
    marks:"80%"
}
for(let key in student){
    console.log(`${key} : ${(student[key])}`)
}