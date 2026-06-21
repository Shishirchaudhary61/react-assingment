const myPromise = new Promise((resolve) => {
    resolve("Data received");
});

myPromise.then((result) => {
    console.log(result);
});