//define responses
// import React, { useState } from "react";
import client from "./contentful";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = (botMessage) => {
    const message = this.createChatBotMessage(botMessage);
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevstate) => ({
      ...prevstate,
      messages: [...prevstate.messages, message],
    }));
  };
}

export default ActionProvider;
