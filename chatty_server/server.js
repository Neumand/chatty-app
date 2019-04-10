const express = require("express");
const SocketServer = require("ws").Server;

const PORT = 3001;

const server = express()
  .use(express.static("public"))
  .listen(PORT, "0.0.0.0", "localhost", () =>
    console.log(`Listening on port ${PORT}`)
  );

const wss = new SocketServer({ server });

// Function to pass message information to the client.
const connectClient = (client, nbClients) => {
  const messageInfo = {
    id: id,
    username: "Bob"
  };
};

wss.on("connection", ws => {
  console.log("Client connected");

  ws.on('message', (message) => {
    const userMessage = JSON.parse(message);
    const { username, content } = userMessage;
    console.log(`User ${username} said ${content}`);
  })

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
