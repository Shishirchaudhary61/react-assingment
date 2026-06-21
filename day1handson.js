//Hands om 1
let arr=[10,24,56,23]

let calculate = (...numbers)=>{
    let res = numbers.reduce(
        (accmulator,Element)=>{
            return accmulator + Element
        }
    )
}
console.log("sum of numbers", calculate(...arr))

//hands on 2

let football = {
    "name":"shishir",
    "age":23,
    "totalrun":6
}
let footballeconomy= {
    salary:2000,
    country:"nepal"
}

let withoutspread={football}
console.log("without spread:", withoutspread)
let newobj ={...football}
console.log("after using spread operator on object:",newObj)

let mergedObj = {...football,...crictereconomy}
console.log("merged object:",mergedObj)