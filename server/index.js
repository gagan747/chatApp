const express = require('express');
const app = express();
const { Server } = require('socket.io');
const { createServer } = require('http');
const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: '*',
		credentials: true,
	},
});
io.on('connection', (socket) => {
	console.log(socket.id);
	socket.on('send-message',(message)=>{
  socket.broadcast.emit('receiver-message', message);
	socket.emit('message-sent',message)
	})
});

httpServer.listen(process.env.PORT || 5000, () => { console.log(`Listening on port ${process.env.PORT || 5000}...`)
});