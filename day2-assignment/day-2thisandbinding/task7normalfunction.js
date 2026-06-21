
const person={
    name:"shishir",
    
normal:  function(){
    console.log(this.name);
}

}
person.normal();
// arrow  functions

  
const obj2={
    names:"shishir",
normald:  () =>{
    console.log(this.names);
},
};
obj2.normald();