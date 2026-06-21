
function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
      ]);
    }, 1000);
  });
}

async function getUsers() {
  const users = await fetchUsers();
  console.log(users);
}

//getUsers();

//async :Asynchrounous,AWAIT
let mypromise = new Promise(
  (resolve, reject)=>{
    let loves = true
    if(loves){
      resolve("I love you")

    }else{
      reject("break up,muskan")
    }

  }
)


let asyncExample = async ()=>{
  console.log("before await")
  let data = await mypromise
  console.log("data:",data)
}
asyncExample()

//error handling
try {
   console.log("before await")
  let data = await mypromise
  console.log("data:",data)

}catch(e){
  console.log("error:",e)

}finally{
  console.log("finally block called")
}
asyncExample()




let fetchTodos = async ()=> {
  try{

  
  let res = await fetch ("https://jsonplaceholder.typicode.com/todos/63")
  let data = await res.json()
  console.log(data)
}
catch (e){
  console.log("error fetching tosdos:",e)
}
}
fetchTodos()
