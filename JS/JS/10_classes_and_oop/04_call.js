function setUsername(username) {
    this.username = username;
}

function createUser(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const tuman = new createUser("tuman", "tuman@email.com", "qaz2ws");
console.log(tuman);
