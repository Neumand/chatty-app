import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: { name: 'Bob' },
      messages: [],
    };
  }

  componentDidMount() {
    console.log('componentDidMount <App />');

    this.clientSocket = new WebSocket('ws://localhost:3001');

    this.clientSocket.onopen = e => {
      console.log('Connected to the server');
    };

    this.clientSocket.onmessage = e => {
      const incomingMessage = JSON.parse(e.data);
      let { id, username, content, type } = incomingMessage;

      switch (type) {
        case 'incomingMessage':
          this.setState({
            messages: [...this.state.messages, { id, username, content }],
          });
          break;
        default:
          console.log('Cannot read message type');
      }
    };
  }

  // Function to pass user message data to the server.
  addNewMessage = content => {
    const username = this.state.currentUser.name;

    const outgoingMessage = {
      username,
      content,
      type: 'postMessage',
    };

    this.clientSocket.send(JSON.stringify(outgoingMessage));
  };

  //   const randomId = () =>
  //     Math.random()
  //       .toString(36)
  //       .substr(2, 6);
  //   const newMessage = {
  //     id: randomId(),
  //     username,
  //     content: content
  //   };
  //   this.setState({ messages: [...this.state.messages, newMessage] });
  // };

  render() {
    return (
      <div>
        <Navbar />
        <MessageList messages={this.state.messages} />
        <ChatBar
          currentUser={this.state.currentUser.name}
          addNewMessage={this.addNewMessage}
        />
      </div>
    );
  }
}
export default App;
