// User Authentication Model

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    authenticate(inputPassword) {
        return this.password === inputPassword;
    }
}

module.exports = User;