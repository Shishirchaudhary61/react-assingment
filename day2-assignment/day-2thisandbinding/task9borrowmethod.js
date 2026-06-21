

const person={

name: "SHISHIR",
showName:function(city){
    console.log(this.name + " from " + city)
}

}

const person1  = {
    name: "Anu"
}
person.showName.call(person1, "dang")
