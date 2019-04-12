G-Chat
=====================

G-Chat is a simple real-time chat application with a space theme! Users can communicate with each other anonymously or with an alias (no login required). Built using React.

## Stack

* Webpack &rarr; Babel, JSX, ES6, webpack dev server
* WebSockets (ws server-side, WebSocket client-side)
* React
* Express
* Node

## Features

* Communicate in real-time with other users (clients)
* Users are assigned one of several space-themed emojis when they change their alias (👾, 🤖, 👽, 🛸, 🚀, 🌠)
* Typing in `/gif` in the chatbar will generate a random space-themed GIF

## Final Product

!['G-Chat'](https://github.com/Neumand/g-chat/blob/master/build/images/G-Chat1.png?raw=true)
!['Side-by-side comparison'](https://github.com/Neumand/g-chat/blob/master/build/images/G-Chat2.png?raw=true)

### Setup

* Install all package dependencies: `npm install`
* Run both the WebPack server and ws server (located in g-chat_server folder): `npm start`
* Open as many browser windows as you like at `localhost:3000` to experiment with functionalities

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* Dotenv
* Request
* Uuid
* Express
