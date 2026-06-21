Promise.resolve(5)
    .then((num) => {
        return num * 2;
    })
    .then((num) => {
        return num + 10;
    })
    .then((result) => {
        console.log(result);
    });