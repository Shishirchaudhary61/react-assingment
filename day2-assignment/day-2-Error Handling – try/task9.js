try {
    unknownFunction();
} catch (error) {
    console.log(error.name);

    console.log(error.message);
}