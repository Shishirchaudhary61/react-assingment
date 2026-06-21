
const obj1 = {
    name:"shishir",
}
const obj2 = {
    name:"Anu",
}

function showName(){
    console.log("hello"+ " " + this.name);  //object1.name,object2.name

}
const bindObj1 = showName.bind(obj1);
const bindObj2 = showName.bind(obj2);
bindObj1();
bindObj2();

