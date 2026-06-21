
// task 9 
function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;

      if (success) {
        resolve([
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
          { id: 3, name: "Charlie" }
        ]);
      } else {
        reject("Failed to fetch users");
      }
    }, 1000);
  });
}

async function getUsers() {
  try {
    const users = await fetchUsers();
    console.log("Users:", users);
  } catch (error) {
    console.log("Oops! Something went wrong. Please try again later.");
  }
}

getUsers();