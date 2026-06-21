function firstTask() {
    return Promise.resolve("First task done");
}

function secondTask() {
    return Promise.resolve("Second task done");
}

async function runTasks() {
    const result1 = await firstTask();
    console.log(result1);

    const result2 = await secondTask();
    console.log(result2);
}

runTasks();