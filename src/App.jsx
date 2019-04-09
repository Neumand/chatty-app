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
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {
        id: 3,
        username: "Michelle",
        content: "Hello there!"
      };
      const messages = this.state.messages.concat(newMessage);
      this.setState({ messages });
    }, 3000);
  }

  addNewMessage = content => {
    const username = this.state.currentUser.name;
    const randomId = () =>
      Math.random()
        .toString(36)
        .substr(2, 6);
    const newMessage = {
      id: randomId(),
      username,
      content: content
    };
    this.setState({ messages: [...this.state.messages, newMessage] });
  }

  render() {
    return (
      <div>
        <Navbar />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser.name} addNewMessage={this.addNewMessage} />
      </div>
    );
  }
}
export default App;
