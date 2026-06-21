const Students ={
    name:"shishir",
    abc:function(){
        console.log("hello", this.name)
    }
}

const bindfunction = Students.abc.bind(Students)
bindfunction();