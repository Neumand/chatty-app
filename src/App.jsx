import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import MessageList from "./MessageList.jsx";
import ChatBar from "./ChatBar.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: { name: "Bob" },
      messages: [
        {
          id: 1,
          username: "Bob",
          content: "Has anyone seen my marbles?"
        },
        {
          id: 2,
          username: "Anonymous",
          content:
            "No, I think you lost them. You lost your marbles, Bob. You lost them for good."
        }
      ]
    };
  }

  componentDidMount() {
    console.log("componentDidMount <App />");

    this.clientSocket = new WebSocket("ws://localhost:3001");

    this.clientSocket.onopen = e => {
      console.log("Connected to the server");
    };

    this.clientSocket.onmessage = e => {
      console.log("This is a message");
    };
  }

  addNewMessage = content => {
    const username = this.state.currentUser.name;

    const outgoingMessage = {
      username,
      content
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
