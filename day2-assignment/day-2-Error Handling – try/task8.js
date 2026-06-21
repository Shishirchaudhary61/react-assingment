try {
    let data = JSON.parse("{name: 'Vanja'}");

    console.log(data);
} catch (error) {
    console.log("Invalid JSON");
}