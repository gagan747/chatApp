const express = require('express');
const app = express();
const path = require('path')
const { Server } = require('socket.io');
const { createServer } = require('http');
const httpServer = createServer(app);
const root = path.join(__dirname, '../', 'client', 'build', 'index.html')
const io = new Server(httpServer, {
	cors: {
		origin: '*',
		credentials: true,
	},
});
console.log(__dirname)
app.use(express.static('../client/build'));
app.get('*', (req, res) => {
	res.sendFile( root );
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