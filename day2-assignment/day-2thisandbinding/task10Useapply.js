


const person={

name: "SHISHIR",
showName:function(age,city){
    console.log(this.name + age + city)
}

}

const person1  = {
    name: "Anu"
}
person.showName.apply(person1, [22, "dang"])
