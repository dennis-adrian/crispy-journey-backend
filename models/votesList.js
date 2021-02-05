const Vote = require('./vote');

class VotesList {
	constructor() {
		this.task = null;
		this.votes = [];
	}

	get getTask() {
		return this.task;
	}
	get getVotes() {
		return this.votes;
	}
    set setTask(task) {
        this.task = task
    }
    set setVotes(value) {
        this.votes = value
    }
	createVote(username, choice) {
		const newVote = new Vote(username, choice);
		this.votes.push(newVote);
		return newVote;
	}
}

module.exports = VotesList;
