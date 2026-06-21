
function fetchSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        theme: "dark",
        language: "English"
      });
    }, 2000);
  });
}

fetchSettings().then((settings) => {
  console.log("Theme:", settings.theme);
  console.log("Language:", settings.language);
});

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

let handlePromise =()=>{
  mypromise.then(
    (data)=>{ console.log("success:",data)}  ).catch(
      (e)=>{
        console.log("success:",e)
      }

    ).catch
(
  (e)=>{
    console.log("Error:",e)
  }

).finally(
  ()=>{
    console.log("finally function called")
  }
)
}
handlePromise()