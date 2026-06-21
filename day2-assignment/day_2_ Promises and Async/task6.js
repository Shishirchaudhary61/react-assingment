function waitTwoSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("2 seconds finished");
        }, 2000);
    });
}

waitTwoSeconds().then((msg) => {
    console.log(msg);
});