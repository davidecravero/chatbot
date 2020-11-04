// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Chatbot",
  //overwrite the existing style
  customStyles: {
    botMessageBox: {
      backgroundColor: "#008b8b",
    },
    chatButton: {
      backgroundColor: "#008b8b",
    },
  },
  initialMessages: [
    createChatBotMessage("Hello, please type 'Help' to start the conversation"),
  ],
};

export default config;
