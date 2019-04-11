import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: { name: 'Anonymous', emoji: '' },
      messages: [],
      userCount: 0,
    };
  }

  componentDidMount() {
    console.log('componentDidMount <App />');

    this.clientSocket = new WebSocket('ws://localhost:3001');

    this.clientSocket.onopen = e => {
      console.log('Connected to the server');
    };

    this.clientSocket.onmessage = e => {
      const incomingData = JSON.parse(e.data);
      let { id, username, content, type, userCount, emoji } = incomingData;

      switch (type) {
        // Update the state with new message data.
        case 'incomingMessage':
          this.setState({
            messages: [
              ...this.state.messages,
              { type, content, username, id, emoji },
            ],
          });
          break;

        // Update the state with new notification data.
        case 'incomingNotification':
          this.setState({
            messages: [...this.state.messages, { type, content }],
          });
          break;

        case 'incomingUser':
          this.setState({
            userCount,
          });
          break;

        default:
          console.log('Cannot read message type');
      }
    };
  }

  getEmoji = () => {
    const emojiArr = ['👾', '🤖', '👽', '👹', '👺'];
    const randomEmoji = emojiArr[Math.floor(Math.random() * 5)];
    return randomEmoji;
  };

  // Update the username in the state to accurately display the correct user when posting a message.
  updateUsername = user => {
    let username = '';
    !user ? (username = 'Anonymous') : (username = user);
    if (this.state.currentUser.name !== username) {
      const message = `${
        this.state.currentUser.name
      } changed their name to ${username}.`;
      this.sendUserNotification(message);
      this.setState({ currentUser: { name: user, emoji: this.getEmoji() } });
    }
  };

  // Function to pass user message data to the server.
  addNewMessage = content => {
    const username = this.state.currentUser.name;
    const emoji = this.state.currentUser.emoji;

    const outgoingMessage = {
      username,
      content,
      emoji,
      type: 'postMessage',
    };

    this.clientSocket.send(JSON.stringify(outgoingMessage));
  };

  // Send a notification to the server.
  sendUserNotification = message => {
    const outgoingMessage = {
      content: message,
      type: 'postNotification',
    };
    this.clientSocket.send(JSON.stringify(outgoingMessage));
  };

  render() {
    return (
      <div>
        <Navbar userCount={this.state.userCount} />
        <MessageList messages={this.state.messages} />
        <ChatBar
          currentUser={this.state.currentUser.name}
          addNewMessage={this.addNewMessage}
          updateUsername={this.updateUsername}
        />
      </div>
    );
  }
}
export default App;
