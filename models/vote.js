const { v4: uuidv4 } = require('uuid');

class Vote {
	constructor(username, choice) {
		this.id = uuidv4();
		this.username = username;
		this.choice = choice;
	}
}

module.exports = Vote;
