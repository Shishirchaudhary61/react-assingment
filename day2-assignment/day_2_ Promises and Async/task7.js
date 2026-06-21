function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 0) {
            resolve("Positive number");
        } else {
            reject("Negative number");
        }
    });
}

checkNumber(5)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });