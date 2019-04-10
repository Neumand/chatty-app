import React, { Component } from 'react';

class ChatBar extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
  }

  // Updates the local state to the inputted username and passes to App through updateUserName function.
  onUserChange = e => {
    const username = e.target.value;
    this.setState({ username });
    this.props.updateUsername(username);
    console.log(username);
  };

  // Event listener which fires when a user hits enter to submit a new message. Resets the input on submission.
  newMessage = e => {
    if (e.key === 'Enter') {
      const messageContent = e.target.value;
      this.props.addNewMessage(messageContent);
      e.target.value = '';
    }
  };

  render() {
    return (
      <footer className='chatbar'>
        <input
          className='chatbar-username'
          placeholder='Your name (or anonymous)'
          value={this.state.username}
          onChange={this.onUserChange}
        />
        <input
          type='text'
          className='chatbar-message'
          placeholder='Type a message and hit ENTER'
          onKeyDown={this.newMessage}
        />
      </footer>
    );
  }
}

export default ChatBar;
