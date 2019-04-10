const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid');

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () =>
    console.log(`Listening on port ${PORT}`),
  );

const wss = new SocketServer({ server });

// Passing the number of users online to the client-side.
const getOnlineUsers = (client, onlineUsers) => {
  const outgoingMessage = {
    type: 'incomingUser',
    userCount: onlineUsers
  }
  client.send(JSON.stringify(outgoingMessage));
}

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    // if (client.readyState === SocketServer.OPEN) {
    client.send(data);
    // }
  });
};

wss.on('connection', ws => {
  console.log('Client connected');
  getOnlineUsers(ws, wss.clients.size);

  ws.on('message', message => {
    const userMessage = JSON.parse(message);

    // Perform different task depending on the message type.
    switch (userMessage.type) {
      case 'postMessage':
        (userMessage.type = 'incomingMessage'), (userMessage.id = uuidv4());
        wss.broadcast(JSON.stringify(userMessage));
        break;

      case 'postNotification':
        (userMessage.type = 'incomingNotification'),
          wss.broadcast(JSON.stringify(userMessage));
        break;

      default:
        console.log('Cannot read message type');
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
