// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm the chatbot, your personal helper, if you need to get help just type one of this topic: Orders, Shipping, Returns, Refund."
    ),
  ],
  botName: "Chatbot",
  // Defines an object of custom styles if you want to override styles
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#ff00c3",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#ff00c3",
    },
  },
};

export default config;
