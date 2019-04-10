import React, { Component } from 'react';

class ChatBar extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
  }

  // Updates the local state to the inputted username.
  onUserChange = e => {
    const username = e.target.value;
    this.setState({ username });
  };

  // Pass the updated username to App.
  onUserConfirm = e => {
    if (e.key === 'Enter') {
      this.props.updateUsername(this.state.username);
    }
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
          onKeyDown={this.onUserConfirm}
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
