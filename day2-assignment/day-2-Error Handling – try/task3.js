try {
    let age = -5;

    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
} catch (error) {
    console.log(error.message);
}