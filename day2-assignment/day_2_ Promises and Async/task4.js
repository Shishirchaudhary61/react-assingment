const myPromise = new Promise((resolve, reject) => {
    reject("Server error");
});

myPromise.catch((error) => {
    console.log(error);
});