const myPromise = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

console.log(myPromise);