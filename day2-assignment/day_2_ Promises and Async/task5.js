function getData() {
    return Promise.resolve("Hello");
}

getData().then((data) => {
    console.log(data);
});