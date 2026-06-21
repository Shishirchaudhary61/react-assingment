

const user = {
  name: "Alice",

  login() {
    console.log(this.name);
  },
};

function simulateClick(callback) {
  callback();
}

simulateClick(user.login);

const boundLogin = user.login.bind(user);

simulateClick(boundLogin);