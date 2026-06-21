function getMessage() {
    return Promise.resolve("Welcome");
}

async function showMessage() {
    const message = await getMessage();

    console.log(message);
}

showMessage();