const VotesList = require('./votesList');

class Sockets {
	constructor(io) {
		this.io = io;
		this.votesList = new VotesList();
		this.socketEvents();
	}

	socketEvents() {
		//on connection
		this.io.on('connection', socket => {
			console.log('client connected');
			socket.on('add-task', ({ task }, callback) => {
				this.votesList.setTask = task;
				this.votesList.setVotes = []
				callback(this.votesList.getTask);

				this.io.emit('task-added', this.votesList.getTask);
			});

			socket.on('add-vote', ({player, card}) => {
				this.votesList.createVote(player, card);
				this.io.emit('vote-added', this.votesList.votes)
			})
		});
	}
}

module.exports = Sockets;
