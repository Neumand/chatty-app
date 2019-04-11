const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid');
const request = require('request');
require('dotenv').config();

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () =>
    console.log(`Listening on port ${PORT}`),
  );

const wss = new SocketServer({ server });

// Passing the number of users online to the client-side.
const getOnlineUsers = onlineUsers => {
  const outgoingMessage = {
    type: 'incomingUser',
    userCount: onlineUsers,
  };
  wss.broadcast(JSON.stringify(outgoingMessage));
};

// Get a random space-related GIF from Giphy API.
const getGiphy = cb => {
  reqOptions = {
    url: `https://api.giphy.com/v1/gifs/search?api_key=${
      process.env.GIPHY_API_KEY
    }&q=space`,
    json: true,
  };

  request(reqOptions, (err, req, images) => {
    const { data } = images;
    const randomIndex = Math.floor(Math.random() * data.length);
    cb(data[randomIndex]);
  });
};

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    // if (client.readyState === SocketServer.OPEN) {
    client.send(data);
    // }
  });
};

wss.on('connection', ws => {
  console.log('Client connected');
  getOnlineUsers(wss.clients.size);

  ws.on('message', message => {
    const userMessage = JSON.parse(message);

    // Perform different task depending on the message type.
    switch (userMessage.type) {
      case 'postMessage':
        (userMessage.type = 'incomingMessage'), (userMessage.id = uuidv4());
        wss.broadcast(JSON.stringify(userMessage));
        break;

      case 'postNotification':
        userMessage.type = 'incomingNotification';
        wss.broadcast(JSON.stringify(userMessage));
        break;

      case 'postGIF':
        (userMessage.type = 'incomingGIF'), (userMessage.id = uuidv4());
        getGiphy(giphy => {
          userMessage.content = {
            title: giphy.title,
            imageUrl: giphy.images.original.url,
          };
          console.log(userMessage);
          wss.broadcast(JSON.stringify(userMessage));
        });
        break;
      default:
        console.log('Cannot read message type');
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    getOnlineUsers(wss.clients.size);
  });
});
