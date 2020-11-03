// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

let config = {
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm the chatbot, your personal helper, please type: I need help, to start the conversation."
    ),
  ],
};

export default config;
