try {
    throw new Error("Manual error");
} catch (error) {
    console.log(error.message);
}