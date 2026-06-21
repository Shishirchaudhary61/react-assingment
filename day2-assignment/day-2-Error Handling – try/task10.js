function getData() {
    return Promise.reject("Server failed");
}

async function fetchData() {
    try {
        const result = await getData();

        console.log(result);
    } catch (error) {
        console.log("Caught:", error);
    }
}

fetchData();