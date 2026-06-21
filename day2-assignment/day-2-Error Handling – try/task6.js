try {
    let num = "abc";

    if (isNaN(num)) {
        throw new Error("Not a number");
    }
} catch (error) {
    if (error.message === "Not a number") {
        console.log("Please enter valid number");
    } else {
        console.log("Unknown error");
    }
}