// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  customStyles: {
    botMessageBox: {
      backgroundColor: "#008b8b",
    },
    chatButton: {
      backgroundColor: "#008b8b",
    },
  },
  initialMessages: [
    createChatBotMessage("Hello, please type HELP to start the conversation"),
  ],
};

export default config;
